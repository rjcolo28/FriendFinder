var express = require("express");
var path = require("path");

var app = express(path);
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);

require("./app/routing/apiRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening to PORT: " + PORT);
});