'use strict';
const TemplateLogs = require('../models/templateLogs');
var ObjectId = require('mongodb').ObjectID;


module.exports.addLog = async (id, templateName, oldTemplate, newTemplate, logData) => {

    var newLog = {
      tempId: id,
      name : templateName,
      original : oldTemplate,
      updated : newTemplate,
      log : logData,
      date :  new Date().toLocaleString()
    }

    console.log("New: " + JSON.stringify(newLog, undefined, 2));

    TemplateLogs.create(newLog, function(err, result) {
      if (err) {
        console.log("Error while save");
        console.log(err);
        return err;
      } else {
        console.log("Inside Log: " + JSON.stringify(result, undefined, 2));
        console.log("Log ID: " + result._id);
        return result;
      }
    });
}
