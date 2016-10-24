var employee = require('./models/employee');
var project = require('./models/project');

module.exports = {
  configure: function(app) {

    app.get('/employee/', function(req, res) {
      employee.get(res);
    });

    app.post('/employee/', function(req, res) {
      employee.create(req.body, res);
    });

    app.put('/employee/', function(req, res) {
      employee.update(req.body, res);
    });

    app.delete('/employee/:id/', function(req, res) {
      employee.delete(req.params.id, res);
    });


    app.get('/project/', function(req, res) {
      project.get(res);
    });

    app.post('/project/', function(req, res) {
      project.create(req.body, res);
    });

    app.put('/project/', function(req, res) {
      project.update(req.body, res);
    });

    app.delete('/project/:id/', function(req, res) {
      project.delete(req.params.id, res);
    });
  }
};
