let db = require("../models");
module.exports = function (app) {
  app.post("/api/players", function (req, res) {
    db.Player.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.status(500).json(err);
      });
  });

  app.get("/api/players/:id", function (req, res) {
    db.Player.findOne({
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

  app.get("/api/players", function (req, res) {
    db.Player.findAll()
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.status(404).json(err);
      });
  });

  app.delete("/api/players/:id", function (req, res) {
    db.Player.destroy({
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

  app.put("/api/players", function (req, res) {
    db.Player.update(req.body, {
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
