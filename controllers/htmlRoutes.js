module.exports = function (app) {
  app.get("/", (req, res) => {
    res.render("signup");
  });
  app.get("/login", function (req, res) {
    res.render("login");
  });
  app.get("/index", function (req, res) {
    res.render("index");
  });
  app.get("/headtohead", function (req, res) {
    res.render("headtohead");
  });
  app.get("/winner", function (req, res) {
    res.render("winner");
  });
};
