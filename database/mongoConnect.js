'use strict';

const mongoose = require("mongoose");

//mongoose.connect("mongodb://mahendra5338:avtkarh5d7Sann@68.183.82.76:27017/coutlootProducts",{useCreateIndex: true,useNewUrlParser: true});

mongoose.connect('mongodb://admin:QuohKi0chainooCho5xu@139.59.70.240:27017/productsDev?authSource=admin');

var mongoConn = mongoose.connection;

mongoConn.on('error', console.error.bind(console, 'Connection error: '));
mongoConn.once('open', function(callback) {
  console.log("Connected to Mongodb");
});

module.exports = mongoConn;
