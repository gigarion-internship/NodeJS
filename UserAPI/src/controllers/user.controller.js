/* router.get('/', getAll1)
router.get('/:id', getById)
router.post('/', [parseSchema(CreateSchema)], create)
router.put('/:id', [parseSchema(CreateSchema)], updateById)
router.delete('/:id', deleteById)
 */


const User = require('../models/user.model')
const getAll1 = async (req = request, res = response) => {
    try {

        //getAll chỗ này là key của object Note
        //data chỗ này là nhận value từ function getAll
        const data = await User.getAll()

        //res này là respon
        res.status(200).json({
            //status: 'OK',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'Internal Server Error',
            data: { error }
        })
    }
}
const getById = async (req = request, res = response) => {
    try {


        const { id } = req.params // id = khietttt

        const data = await User.getById(id)
        //data = {name: "Trương Minh Khiết ", image: "hinh1", follow: 123}
        res.status(200).json({
            status: 'OK',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'Internal Server Error',
            data: { error }
        })
    }
}
const create = async (req = request, res = response) => {
    try {
        const data = await User.create(req.body)
        //         data = {
        //     name: "abc",
        //     age: 213
        // }
        res.status(201).json({
            status: 'Created',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'Internal Server Error',
            data: { error }
        })
    }
}
const updateById = async (req = request, res = response) => {
    try {
        const { id } = req.params

        const data = await User.updateById(id, req.body)

        res.status(200).json({
            status: 'OK',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'Internal Server Error',
            data: { error }
        })
    }
}
const deleteById = async (req = request, res = response) => {
    try {
        const { id } = req.params

        const data = await User.deleteById(id)

        res.status(200).json({
            status: 'OK',
            data
        })
    } catch (error) {
        res.status(500).json({
            status: 'Internal Server Error',
            data: { error }
        })
    }
}
module.exports = {
    getAll1,
    getById,
    create,
    updateById,
    deleteById
}