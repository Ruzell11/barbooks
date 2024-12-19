import express from 'express';
import gameRouter from './gameRoutes';


const router = express.Router();

router.use('/games', gameRouter)

export default router;