'use strict';

const mongoose = require("mongoose");

mongoose.connect("mongodb://mahendra5338:avtkarh5d7Sann@68.183.82.76:27017/coutlootProducts",{useCreateIndex: true,useNewUrlParser: true});

var mongoConn = mongoose.connection;

mongoConn.on('error', console.error.bind(console, 'Connection error: '));
mongoConn.once('open', function(callback) {
  console.log("Connected to Mongodb");
});

module.exports = mongoConn;
