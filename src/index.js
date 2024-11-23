"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// load dev secrets
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
// other libraries
var path_1 = require("path");
// initialize express
var express_1 = require("express");
var app = (0, express_1.default)();
var port = process.env.PORT;
// if on production
if (!port) {
    port = '3000';
}
// get api router
var get_ts_1 = require("./api/get.ts");
app.use(express_1.default.static('public'));
app.use('/api', get_ts_1.default);
// serve default route
app.get('/', function (req, res) {
    res.sendFile(path_1.default.resolve('public/html/main.html'));
});
// listen on port
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
