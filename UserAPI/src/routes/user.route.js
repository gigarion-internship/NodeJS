const router = require('express').Router()
const { getAll1, getById, create, updateById, deleteById } = require('../controllers/user.controller')
const { CreateSchema } = require('../models/user.model')
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
