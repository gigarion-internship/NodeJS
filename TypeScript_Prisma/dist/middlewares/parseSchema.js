"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseSchema = (schema, req, res, next) => {
    try {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json({ status: 'Bad Request', data: { error: result.error } });
        }
        else {
            req.body = result.data;
            // Gọi next() để tiếp tục xử lý request
            next();
        }
    }
    catch (error) {
        res.status(500).json({ status: 'Internal Server Error', data: { error } });
    }
};
exports.default = parseSchema;
