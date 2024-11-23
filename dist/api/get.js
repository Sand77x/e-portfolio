// import data
import data from './data/index.js';
import express from 'express';
const router = express.Router();
router.get('/get', (req, res) => {
    const moduleName = req.query.input;
    if (data[moduleName]) {
        let response = Object.assign({ error: false }, data[moduleName]);
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
//# sourceMappingURL=get.js.map