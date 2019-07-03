const Templates = require('../models/template');
var logService = require('../services/logs');
var Categories = require('../models/templateCategories')
var ObjectId = require('mongodb').ObjectID;
const TemplateLogs = require('../models/templateLogs');
var categoryModels = require('../models/categoryModels');


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


module.exports.removeLog = async(req,res) => {

  var id = req.body.id;

  try {

    //var removedLog = await TemplateLogs.remove({"_id": ObjectId(id) }).lean();
    //var updatedTemp = await Templates.update({"_id" : removedLog.tempId }, {$set : {"component" : removedLog.original }}).lean();

    var log = await TemplateLogs.findOne({"_id": ObjectId(id)}).lean();
    var updated = await Templates.update({"_id": log.tempId}, {$set: {"component": log.original}});
    // var removedLog = await TemplateLogs.remove({"_id": ObjectId(id));

    var generatedLog = "Log ID: " + log._id + " was Undone.";

    var val = await logService.addLog(log.tempId, log.name, log.updated, log.original, generatedLog);

    res.json({status: "Successfully Reverted!"});


  } catch (e) {
    res.json({status: "Error while Performing operation!"});
  }

}


module.exports.resetTemplateData = async(req, res) => {

  var id = req.body.tempId;

  var componentsData = await TemplateLogs.find({"tempId": id}).lean();

  console.log(JSON.stringify(componentsData[0].original, undefined, 2));

  var index = componentsData.length - 1;

  var originalComponent = componentsData[index].original;
  var responseStatus = '';

  Templates.update({"_id": ObjectId(id)}, {$set: {component: originalComponent} }, function(err, result) {
    if(err) {

      console.log(err);
      responseStatus += "Error while Reseting Template";
      res.json({ status: responseStatus });

    } else {
      //console.log("successfully updated: " + JSON.stringify(result));
      responseStatus += "Template reset done Successfully, ";
      res.json({ status: responseStatus });
    }
  });

}


module.exports.getLogs = async(req, res) => {

  var logs = await TemplateLogs.find({}, {"name":1, "tempId":1, "log":1, "date":1});
  res.json({logs: logs});

}


module.exports.addTemplate = async(req, res) => {

    var data = JSON.parse(req.body.strNewTemplate);

//    var data = req.body.strNewTemplate;


    console.log("Data: " + JSON.stringify(data, undefined, 2));

  // res.json({status: "done"});

    var newTemplate = {
        name : data.name,
        component : data.component
    }

    console.log(newTemplate);
    var generatedLog = data.generatedLog;
    var responseStatus = '';
      try {

           var newTemp = await Templates.create(newTemplate);

           console.log("Type: " + (JSON.stringify(newTemp, undefined, 2)));

           newTemp = newTemp.toObject();

           responseStatus += " Template created with ID: " + newTemp._id + "  ";

           var strId = JSON.parse(JSON.stringify(newTemp._id));

           var val = await logService.addLog(strId, newTemp.name, newTemp.component, newTemp.component, generatedLog);


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
}



module.exports.updateTemplate = async(req, res) => {
//console.log(req.body);

  var data = JSON.parse(req.body.strTempData);

  //var data = req.body.strTempData;

  console.log("Data: " + JSON.stringify(data, undefined, 2));

  var templateId = data.id;
  var template = data.temp;
  var generatedLog = data.log;

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


module.exports.getKeyList = async(req, res) => {

  try {
    console.log("Fetching!");
//    var keys = await categoryModels.find({},{"key":1, "_id":0}).lean()
    var keys = await categoryModels.distinct("key").lean();
    console.log(typeof keys);
    console.log(JSON.stringify(keys));

    res.json({key: keys});

  } catch(err) {
    console.log(err);
  }
}

module.exports.getKeyValues = async(req, res) => {

  try {

    var key = req.body.key;
    console.log("Key: "+key);
    var values = await categoryModels.find({"key":key},{"displayTitle":1, "_id":0}).lean();

    var titles = [];

    values.forEach(function(item) {
      titles.push(item.displayTitle);
    });

    console.log(titles);

    res.json({title: titles});

  }catch(err) {
    console.log(err);
  }

}
