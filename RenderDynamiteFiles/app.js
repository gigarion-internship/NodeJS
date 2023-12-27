const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
// cho phép bạn sủ dụng các mẫu handlebars để tạo nội dung động trên trang web
app.set('view engine', 'hbs');
// Xác định 1 route cho yêu cầu HTTP với phương thức ghet đến đường dẫn gốc ("/")
app.set('views', path.join(__dirname, '/view'));
//
app.get("/", (req, res) => {
    res.render("index", {
        author: "Arash Arora",
    });
});
//
app.listen(3000, (req, res) => {
    console.log("Server running on 3000");
});