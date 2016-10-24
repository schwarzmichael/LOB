var connection = require('../connection');

function Project() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from projects', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(project, res) {
    connection.acquire(function(err, con) {
      con.query('insert into projects set ?', project, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Project creation failed'});
        } else {
          res.send({status: 0, message: 'Project created successfully'});
        }
      });
    });
  };

  this.update = function(project, res) {
    connection.acquire(function(err, con) {
      con.query('update projects set ? where id = ?', [project, project.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Project update failed'});
        } else {
          res.send({status: 0, message: 'Project updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from projects where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
}

module.exports = new Project();
