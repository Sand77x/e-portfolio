"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// load dev secrets
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// other libraries
const path_1 = __importDefault(require("path"));
// initialize express
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let port = process.env.PORT;
// if on production
if (!port) {
    port = '3000';
}
// get api router
const get_js_1 = __importDefault(require("./api/get.js"));
app.use(express_1.default.static('public'));
app.use('/api', get_js_1.default);
// serve default route
app.get('/', (req, res) => {
    res.sendFile(path_1.default.resolve('public/html/main.html'));
});
// listen on port
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
//# sourceMappingURL=index.js.map