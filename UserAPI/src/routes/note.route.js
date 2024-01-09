// import
const router = require('express').Router()
const { getAll1, getById, create, updateById, deleteById } = require('../controllers/note.controller')
const { CreateSchema } = require('../models/note.model')
const parseSchema = require('../middlewares/parseSchema')

router.get('/', getAll1)
router.get('/:id', getById)

// [parseSchema(CreateSchema)]: Đây là một mảng chứa middleware.
// Trong trường hợp này, middleware parseSchema được sử dụng để kiểm tra và xác nhận dữ liệu đầu vào dựa trên schema CreateSchema.
// Middleware này được chạy trước khi yêu cầu được chuyển đến hàm xử lý chính.
router.post('/', [parseSchema(CreateSchema)], create)
router.put('/:id', [parseSchema(CreateSchema)], updateById)
router.delete('/:id', deleteById)

module.exports = router

// tao them user (file khac user.route.js)
// research promise
// research event loop (node Js)
// restful api ( method, param, body, query, url) 
// typesafe, help kieu du lieu ( lan: typescript))`