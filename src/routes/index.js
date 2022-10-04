const newRouter = require("./news");
const siteRouter = require("./site");
function route(app) {
  app.get("/", (req, res) => {
    res.render("home");
  });
  app.use("/news", newRouter);
  app.use("/", siteRouter);
}

module.exports = route;
