const mongoose =require("mongoose");
var Schema = mongoose.Schema;

var templateSchema = new Schema({},{strict : false});

module.exports=mongoose.model( "NS_test_categories", templateSchema, "NS_test_categories" );
