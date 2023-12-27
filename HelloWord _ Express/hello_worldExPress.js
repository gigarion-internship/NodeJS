// Sử dụng hàm require của Node.js để import Express
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});
app.listen(3000, () => {
    console.log("Server running on 3000");
});