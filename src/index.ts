// load dev secrets
import dotenv from 'dotenv';
dotenv.config();
//
// other libraries
import path from 'path';

// initialize express
import express from 'express';
const app = express();
const port = process.env.PORT;

// get api router
import get from './api/get.ts';

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
