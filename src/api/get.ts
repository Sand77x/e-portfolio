interface Module {
    html: string;
    error: boolean;
    reply: string;
}

// import data
import data from './data/index.js';

import express from 'express';
const router = express.Router();

router.get('/get', (req, res) => {
    const moduleName = <string>req.query.input;

    if (data[moduleName]) {
        let response: Module = {
            error: false, // error first so module can overwrite it
            ...data[moduleName],
        };

        res.status(200).send(response);
        return;
    }

    res.status(200).send({
        html: '',
        reply: `${moduleName}: command not found.`,
        error: true,
    });
});

export default router;
