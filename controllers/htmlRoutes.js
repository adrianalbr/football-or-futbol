module.exports = function (app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/login", function (req, res) {
    res.render("login");
  });
};