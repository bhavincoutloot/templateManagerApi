const mongoose =require("mongoose");
var Schema = mongoose.Schema;

var templateSchema = new Schema({},{strict : false});

module.exports=mongoose.model( "NS_catModels_dipesh", templateSchema, "NS_catModels_dipesh" );
