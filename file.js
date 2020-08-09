// load express
const express = require('express');
const app = express();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage }).single("demo_model");



app.get('/', (req, res) => {
    res.send('hello world');
});
app.listen(3000, () => {
    console.log('Started on port 3000');
});


app.post("/threedmodels", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).send("Something went wrong!");
        }
        res.send(req.file);
    });
});