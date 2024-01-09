const Note = require('../models/note.model')

// // Khai báo các controller
//getAll này là tên biến
const getAll1 = async (req = request, res = response) => {
    try {

        //getAll chỗ này là key của object Note
        //data chỗ này là nhận value từ function getAll
        const data = await Note.getAll()

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

const body = {
    id: 123
}

const login = async (req = body.id, res = response) => {
    try {

        const data = await Note.getById(req)

        if (data) {
            //res này là respon
            res.status(200).json({
                status: 'OK',
                data
            })
        }

        res.status(201).json({
            status: 'sai password',
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

        const data = await Note.getById(id)
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

// const user = {
//     name: "abc",
//     age: 213
// }
// body(user)

const create = async (req = request, res = response) => {
    try {
        const data = await Note.create(req.body)
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

        const data = await Note.updateById(id, req.body)

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

        const data = await Note.deleteById(id)

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