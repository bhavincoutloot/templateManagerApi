const mongoose =require("mongoose");
var Schema = mongoose.Schema;

var templateSchema = new Schema({},{strict : false});


module.exports=mongoose.model( "templateEngine", templateSchema, "templateEngine" );
//module.exports=mongoose.model( "NS_test_tempEngine", templateSchema, "NS_test_tempEngine" );
