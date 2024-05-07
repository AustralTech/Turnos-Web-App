import { Router } from 'express';
import userRouter from './user.route.js';

const router = Router();

// Monta el enrutador de usuarios
router.use('/users', userRouter); 

export default router;
