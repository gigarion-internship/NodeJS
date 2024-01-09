module.exports = schema => {

    return (req = request, res = response, next) => {
        try {
            // Kiểm tra và xác nhận dữ liệu đầu vào dựa trên schema
            const result = schema.safeParse(req.body)

            if (!result.success) return res.status(400).json({
                status: 'Bad Request',
                data: {
                    error: result.error
                }
            })

            req.body = result.data

            next()
        } catch (error) {
            return res.status(500).json({
                status: 'Internal Server Error',
                data: { error }
            })
        }
    }
}