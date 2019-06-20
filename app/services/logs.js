'use strict';
const TemplateLogs = require('../models/templateLogs');


module.exports.addLog = async (id, templateName, oldTemplate, newTemplate, logData) => {

    var newLog = {
      tempId: id,
      name : templateName,
      original : oldTemplate,
      updated : newTemplate,
      log : logData,
      date :  new Date().toLocaleString()
    }

    TemplateLogs.create(newLog, function(err, result) {
      if (err) {
        console.log("Error while save");
        return err;
      } else {
        console.log(JSON.stringify(result, undefined, 2));
        return result;
      }
    });
}
