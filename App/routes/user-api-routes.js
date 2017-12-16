 var db = require("../models");

module.exports = function(app) {

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

  

  // app.post("/api/moods", function(req, res) {
  //   console.log("were in the route-----------");
  //   console.log(req.body);
  //   db.User.create({
  //     id: req.body.id,
  //     color: req.body.color
  //   }).then(function() {
  //     res.redirect(307, "/api/login");
  //   }).catch(function(err) {
  //     console.log(err);
  //     res.json(err);
  //   })
  // });
  //   db.User.create(req.body).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

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
