const Templates = require('../models/template');
var logService = require('../services/logs');
var Categories = require('../models/templateCategories')
var ObjectId = require('mongodb').ObjectID;

module.exports.pushCategoryTemplate= async(req,res)=>{

    console.log(req.body.object);

    var component = JSON.parse(req.body.object);

    console.log(component);

     const doc =new finalTemplate(component);

     var temp = await doc.save();

    return res.status(200).json({auth:true,success:1,response:"inserted successfully"});

    console.log("done");

}

module.exports.getTemplateList = async (req,res) =>{

          const temp = await Templates.find({}).select({'_id':1,'name':1}).lean();
          ///console.log(temp);

          res.status(200).json({temp});

}


module.exports.getTemplate = async (req,res) =>{

  console.log(req.body);

  const temp = await Templates.findOne({_id:req.body.tempId}).select({'_id':0,'__v':0}).lean();


  res.status(200).json({temp});

}




module.exports.updateTemplateEngine= async(req,res)=>{

  var tempId = req.body.tempId;
  var object = JSON.parse(req.body.object);

  console.log("tempId -"+tempId);
  console.log("object -"+object.name);

   const doc =await finalTemplate.updateOne({'_id':tempId},{'$set':{'name':object.name,'sellInitStatus':object.sellInitStatus,'component':object.component}})
   console.log(doc);


  return res.status(200).json({auth:true,success:1,response:"inserted successfully"});

  console.log("done");

}

module.exports.getCategoryList = async (req, res) => {

    try{

          var category = await Categories.find({},{"categoryName":1, "identification":1, "_id":0}).lean()
          console.log("Categories: " + JSON.stringify(category, undefined, 2));
          var categoryNames = [];
          category.forEach(function(items){
              categoryNames.push(items.categoryName + " - " + items.identification);
          });
          res.status(200).json({categories : categoryNames});

    }  catch(err){
        res.json({categories: 'None'});
    }
}


module.exports.getCategoryId = async (req, res) => {

    var categoryName = req.body.name;

    try {

      var category = await Categories.findOne({"categoryName" : categoryName}).lean();
      var id = category.identification;

      res.json({categoryId : id});


    } catch (err) {

      console.log(err);
      res.json({categoryId: ""});

    }
}

module.exports.updateTemplate = async(req, res) => {

//  console.log(req.body);

  var templateId = req.body.id;
  var template = req.body.temp;
  var generatedLog = req.body.log;

  var responseStatus = "";


  console.log(generatedLog);

  //console.log(templateId);

  var originalTemp = await Templates.findOne({"_id": ObjectId(templateId)}).lean();

  Templates.update({"_id": ObjectId(templateId)}, {$set: {component: template.component} }, function(err, result) {
    if(err) {

      console.log(err);
      responseStatus += "Error while Updating Template";
      res.json({ status: responseStatus });

    } else {
      console.log("successfully updated: " + JSON.stringify(result));
      responseStatus += "Template Updated Successfully, ";
    }
  });


    var updatedTemp = await Templates.findOne({"_id": ObjectId(templateId)}).lean();

    console.log("Original: " + JSON.stringify(originalTemp.component, undefined, 2));
    console.log("Updated: " + JSON.stringify(updatedTemp.component, undefined, 2));

    try {
      var val = await logService.addLog(templateId, originalTemp.name, originalTemp.component, updatedTemp.component, generatedLog);


      if (val instanceof Error) {

        responseStatus += "Error while Saving Log ";
        res.json({ status: responseStatus });
        console.log("error while saving log");

      } else {

        responseStatus += "Log Saved Successfully";
        res.json({ status: responseStatus });
        console.log("Log saved Successfully!");
      }

    } catch(err) {

      console.log(err);
      responseStatus += "Error while Saving Log ";
      res.json({ status: responseStatus });
    }

//  return res.status(200).json({auth:true,success:1,response:"updated successfully"});

}
