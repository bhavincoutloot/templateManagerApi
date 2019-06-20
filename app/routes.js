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
}
