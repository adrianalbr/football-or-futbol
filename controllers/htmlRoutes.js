module.exports = function (app) {
  app.get("/", (req, res) => {
<<<<<<< HEAD
=======
    res.render("login");
  });
  app.get("/index", (req, res) => {
    res.render("index");
  });
  app.get("/login", function (req, res) {
>>>>>>> f2d04a92222d61d0868716acf6b2bca6ba9b18d2
    res.render("login");
  });
  app.get("/index", function (req, res) {
    res.render("index");
  });
  app.get("/headTohead", function (req, res) {
    res.render("headTohead");
  });
  app.get("/futbol", function (req, res) {
    res.render("futbol");
  });
  app.get("/football", function (req, res) {
    res.render("football");
  });
  app.get("/winner", function (req, res) {
    res.render("winner");
  });
};
