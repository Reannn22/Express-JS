const { connection } = require("../config/database.config");

class UserController {
    constructor(app) {
      this.app = app;
    }
  
  
    boot() {
      this.app.get('/users', this.getUsers);
      this.app.post('/users', this.createUser);
      this.app.get('/users/:id', this.getUserByID);
      this.app.put('/users/:id', this.updateUser);
      this.app.delete('/users/:id', this.deleteUser);
    }
  
    getUsers(req, res) {
        const query = 'SELECT * FROM teachers';

        connection.query(query, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            return res.status(200).json({
                message: "OK",
                data: results
            });
        });
    }

    createUser(req, res) {
  
    }
  
    getUserByID(req, res) {
  
    }
  
    updateUser(req, res) {
  
    }
  
    deleteUser(req, res) {
  
    }
  }

  module.exports = {
    UserController
  }