var app = require("express")(),
  accounts = require("./accounts"),
  dbQuery = require("./mongo-queries");

app
.get(/(\/(.{1,})?){1,}/, function(req, res, next) {
  next();
})
.get("/", function(req, res, next) {
  res.render("layout", { page: "index", title: "" });
})
.get("/account", function(req, res, next) {
})
.get("/about", function(req, res, next) {
})
.get("/dashboard", function(req, res, next) {
})
.get("/tnc", function(req, res, next) {
  next();
})
.get("/terms", function(req, res, next) {
  next();
})
.get("/terms-and-conditions", function(req, res, next) {
})
.get("*", function(req, res, next) {
  res.status(404).send("404: Not Found");
})
.post("/", function(req, res, next) {
  res.status(404).send("404: Not Found");
})
.post("*", function(req, res, next) {
  res.status(404).send("404: Not Found");
});

module.exports = app;
console.log("routes.js mounted\n");
