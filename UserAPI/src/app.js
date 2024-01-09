// Import thư viện dotenv và cấu hình biến môi trường từ file .env
require('dotenv').config()
// // Import framework Express
const express = require('express')
const app = express()
// Import middleware Cors
const cors = require('cors')
// Sử dụng middleware Cors để cho phép yêu cầu từ tất cả các domain
app.use(cors())
// Sử dụng middleware của Express để parse yêu cầu có dạng JSON
app.use(express.json())
////
app.use(express.urlencoded({ extended: false }))
// Sử dụng router từ file note.route.js khi nhận các yêu cầu đến đường dẫn '/api/note'
app.use('/api/note', require('./routes/note.route'))
app.use('/api/user', require('./routes/user.route'))
const port = process.env.port || 3000
const server = app.listen(port, console.log(`App listining in port ${port} - http://localhost:${port}`))

module.exports = { app, server }

