let db = require("../models");
module.exports = function (app) {
  app.post("/api/heads", function (req, res) {
    db.Head.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.status(500).json(err);
      });
  });

  app.get("/api/heads/:id", function (req, res) {
    db.Head.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.status(404).json(err);
      });
  });

  app.get("/api/heads", function (req, res) {
    db.Head.findAll()
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.status(404).json(err);
      });
  });
};
