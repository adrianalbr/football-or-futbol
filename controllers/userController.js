let db = require("../models");
console.log(db);
module.exports = function (app) {
  app.post("/api/users", function (req, res) {
    db.User.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.status(500).json(err);
      });
  });

  app.get("/api/users/:email", function (req, res) {
    db.User.findOne({
      where: {
        email: req.params.email,
      },
    })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.status(404).json(err);
      });
  });

  app.delete("/api/users/:email", function (req, res) {
    db.User.destroy({
      where: {
        email: req.params.email,
      },
    })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.status(404).json(err);
      });
  });

  app.put("/api/users", function (req, res) {
    db.User.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.status(404).json(err);
      });
  });
};
