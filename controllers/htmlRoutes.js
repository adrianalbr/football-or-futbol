module.exports = function (app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/login", function (req, res) {
    res.render("login");
  });
  app.get("/headTohead", function (req, res) {
    res.render("headTohead");
  });
  app.get("/futbol", function (req, res) {
    res.render("futbol");
  });
  app.get("/football", function (req, res) {
    res.render("footballgit status
    ");
  });
};
