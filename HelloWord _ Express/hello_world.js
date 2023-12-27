console.log('Hello World');
// Nhập module fs
const fs = require("fs");

// Tạo 1 tệp tin
fs.writeFileSync("file.txt", "AAAA");
// Thêm thông tin vào tệp tin
fs.appendFileSync("file.txt", "\nBBBB");

