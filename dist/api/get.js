"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import data
const index_js_1 = __importDefault(require("./data/index.js"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/get', (req, res) => {
    const moduleName = req.query.input;
    if (index_js_1.default[moduleName]) {
        let response = Object.assign({ error: false }, index_js_1.default[moduleName]);
        res.status(200).send(response);
        return;
    }
    res.status(200).send({
        html: '',
        reply: `${moduleName}: command not found.`,
        error: true,
    });
});
exports.default = router;
//# sourceMappingURL=get.js.map