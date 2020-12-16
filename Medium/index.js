
const express = require('express');
var bodyParser = require("body-parser");
const app = express();
var data = require('./database.json');
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/employees', (req, res) => {
    if (!data) {
        res.status(404).send(
            'Could not find information.'
        )
    } res.send(data)
})

app.get('/employees/:id', (req, res) => {
    const finder = data.employees.find(function (employees) {
        return parseInt(req.params.id) === employees.id
    })
    if (!finder) {
        res.status(404).send('Could not find infomation')
    } res.send(finder)
})

app.listen(3005);