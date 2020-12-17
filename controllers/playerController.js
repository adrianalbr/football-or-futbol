let db = require("../models");
module.exports = function (app) {
  // view route for football moved here because it has db interaction and logic
  app.get("/football", function (req, res) {
    db.Player.findAll({
      where: {
        game: "football",
      },
    })
      .then(function (data) {
        res.render("football", {
          footballPlayers: data,
        });
      })
      .catch(function (err) {
        res.status(404).json(err);
      });
  });

  app.get("/futbol", function (req, res) {
    db.Player.findAll({
      where: {
        game: "futbol",
      },
    })
      .then(function (data) {
        res.render("futbol", {
          futbolPlayers: data,
        });
      })
      .catch(function (err) {
        res.status(404).json(err);
      });
  });

  // api routes
  app.post("/api/players", function (req, res) {
    req.body.source = "user";
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
