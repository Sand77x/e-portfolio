"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import data
var index_js_1 = require("./data/index.js");
var express_1 = require("express");
var router = express_1.default.Router();
router.get('/get', function (req, res) {
    var moduleName = req.query.input;
    if (index_js_1.default[moduleName]) {
        var response = __assign({ error: false }, index_js_1.default[moduleName]);
        res.status(200).send(response);
        return;
    }
    res.status(200).send({
        html: '',
        reply: "".concat(moduleName, ": command not found."),
        error: true,
    });
});
exports.default = router;
