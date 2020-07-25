const express = require('express');
const app = express();
var data = require('./dataSource.json');
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json());

// all record
app.post('/orders', function (req, res) {

    return res.json({ result: data, count: data.length });
});
// insert
app.post('/orders/insert', function (req, res){
    data.splice(0, 0, req.body.value);
    return res.status(200).send('Row Inserted');
});

// remove
app.post('/orders/delete', function (req, res){
    data = data.filter(x => x.ZipCode != req.body.key);
    return res.status(200).send('Row Deleted');
});
// update
app.post('/orders/update', function (req, res){
    var index = data.findIndex(x => x.ZipCode === req.body.value.ZipCode);
    data.splice(index, 1, req.body.value);
    return res.status(200).send('Row Updated');
});


app.listen(8080);