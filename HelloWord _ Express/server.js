// using express
const express = require("express");
const app = express()
// send 1 yêu cầu get đến đường dẫn "/" , hàm xử lý sẽ đươc gọi
app.get("/", (req, res) => {
    // app.get to handle GET requests
    // req - http request, res - desired response
    res.send("Hello World"); // send Hello World to this route
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});