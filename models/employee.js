var connection = require('../connection');

function Employee() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from employees', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(employee, res) {
    connection.acquire(function(err, con) {
      con.query('insert into employees set ?', employee, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Employee creation failed'});
        } else {
          res.send({status: 0, message: 'Employee created successfully'});
        }
      });
    });
  };

  this.update = function(employee, res) {
    connection.acquire(function(err, con) {
      con.query('update employees set ? where id = ?', [employee, employee.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Employee update failed'});
        } else {
          res.send({status: 0, message: 'Employee updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from employees where id = ?', [id], function(err, result) {
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

module.exports = new Employee();
