const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const { z } = require('zod')

const target = 'note'
// Đại loại như hàm
module.exports = {
    // 'async' để đảm bảo rằng nó có thể hoạt động đồng thời và không chặn lệnh khác trong khi đang thực hiện công việc chờ đợi.
    // Hàm await chỉ có thể được sử dụng trong hàm được đánh dấu là async.
    // Hàm để lấy tất cả các ghi chú từ cơ sở dữ liệu
    getAll: async () => await prisma[target].findMany(),
    // Hàm để lấy nhiều ghi chú dựa trên tiêu đề
    getManyByTitle: async title => await prisma[target].findMany({ where: { title: { contains: title } } }),
    // Hàm để lấy một ghi chú duy nhất dựa trên tiêu đề
    getByTitle: async title => await prisma[target].findUnique({ where: { title } }),
    // Hàm để lấy một ghi chú duy nhất dựa trên ID
    getById: async id => await prisma[target].findUnique({ where: { id } }),
    // Hàm để tạo mới một ghi chú
    create: async data => await prisma[target].create({ data }),
    // Hàm để xóa ghi chú dựa trên tiêu đề
    deleteByTitle: async title => await prisma[target].delete({ where: { title } }),
    // Hàm để xóa ghi chú dựa trên ID
    deleteById: async id => await prisma[target].delete({ where: { id } }),
    // Hàm để cập nhật một ghi chú dựa trên điều kiện và dữ liệu mới
    update: async (where, data) => await prisma[target].update({ where, data }),
    // Hàm để cập nhật một ghi chú dựa trên tiêu đề và dữ liệu mới
    updateByTitle: async (title, data) => {
        return await prisma[target].update({ where: { title }, data })
    },
    updateById: async (id, data) => await prisma[target].update({ where: { id }, data }),
    // định nghĩa kiểu dữ liệu đầu vào khi tạo mới 1 note
    CreateSchema: z.object({
        id: z.string().min(1).max(255).optional(),
        title: z.string().min(1).max(255).optional(),
        description: z.string().min(0).max(255).optional()
    }).strip(),
}

// event loop
// stack -> sync
// queue-> asynce
