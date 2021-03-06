const controller = require('./controllers/templateController');

module.exports = function(app){

    app.route('/test/getTemplateList').post(controller.getTemplateList);
    app.route('/test/getTemplate').post(controller.getTemplate);
    app.route('/test/updateTemplate').post(controller.updateTemplate);
    app.route('/test/getCategoryId').post(controller.getCategoryId);
    app.route('/test/getCategoryList').post(controller.getCategoryList);
    app.route('/test/resetTemplateData').post(controller.resetTemplateData);
    app.route('/test/getLogs').post(controller.getLogs);
    app.route('/test/removeLog').post(controller.removeLog);
    app.route('/test/addTemplate').post(controller.addTemplate);
    app.route('/test/getKeyList').post(controller.getKeyList);
    app.route('/test/getKeyValues').post(controller.getKeyValues);
}
