// load dev secrets
import dotenv from 'dotenv';
dotenv.config();
// other libraries
import path from 'path';
// initialize express
import express from 'express';
const app = express();
let port = process.env.PORT;
// if on production
if (!port) {
    port = '3000';
}
// get api router
import get from './api/get.js';
app.use(express.static('public'));
app.use('/api', get);
// serve default route
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/html/main.html'));
});
// listen on port
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
//# sourceMappingURL=index.js.map