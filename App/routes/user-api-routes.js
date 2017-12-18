 var db = require("../models");

module.exports = function(app) {

'use strict';

module.exports = (app, db) => {

  // GET all users
  app.get('/users', (req, res) => {
    db.users.findAll()
      .then(users => {
        res.json(users);
      });
  });

  // GET one owner by id
  app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    db.users.find({
      where: { id: id }
    })
      .then(user => {
        res.json(user);
      });
  });

  // POST single user
  app.post('/user', (req, res) => {
    const name = req.body.name;
    const role = req.body.role;
    db.users.create({
      name: name,
      role: role
    })
      .then(newOwner => {
        res.json(newOwner);
      })
  });

  // PATCH single user
  app.patch('/user/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.users.find({
      where: { id: id }
    })
      .then(user => {
        return user.updateAttributes(updates)
      })
      .then(updatedOwner => {
        res.json(updatedOwner);
      });
  });

  // DELETE single user
  app.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    db.users.destroy({
      where: { id: id }
    })
      .then(deletedOwner => {
        res.json(deletedOwner);
      });
  });
};







  app.get("/api/user_data", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findAll({
      include: [db.Mood]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/user_data/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Mood]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });


  app.delete("/api/members/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      },
      include: [db.Mood, db.Dim_moods]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });



};

