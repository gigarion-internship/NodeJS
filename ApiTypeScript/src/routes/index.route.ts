// src/routes/index.route.ts
import express from 'express';
import userRoutes from './user.route';
import noteRoutes from './note.route';

const router = express.Router();

// Use user routes
router.use('/users', userRoutes);

// Use note routes
router.use('/notes', noteRoutes);

export default router;
