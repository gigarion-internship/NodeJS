var express = require('express');
var app = express();
var fs = require("fs");
// API list
app.get('/gom4API', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})
// API add
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "professtion": "teacher",
        "id": 4
    }
}
app.post('/gom4API', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        // chuyển đổi dữ liệu được từ Json sang JS
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        // trả về dữ liệu đã cập nhật dưới dạng Json cho người gửi yêu cầu
        res.end(JSON.stringify(data))
    })
})
// API show detail
app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse(data);
        var user = users["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    });
})
// API delete 
var id = 2;
app.delete('/gom4API', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["user" + 2];

        console.log(data);
        res.end(JSON.stringify(data));
    });
})
//
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})