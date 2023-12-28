var express = require('express')
var app = express();
var fs = require("fs")

var user = {
   "user4": {
      "name": "mohit",
      "password": "password4",
      "professtion": "teacher",
      "id": 4
   }
}

app.post('/addUser', function (req, res) {
   fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
      // chuyển đổi dữ liệu được từ Json sang JS
      data = JSON.parse(data);
      data["user4"] = user["user4"];
      console.log(data);
      // trả về dữ liệu đã cập nhật dưới dạng Json cho người gửi yêu cầu
      res.end(JSON.stringify(data))
   })
})

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port)
})

