import express from 'express';
import { createStore } from '../controllers/storeController';

const router = express.Router();

router.post('/', createStore);

export default router;
