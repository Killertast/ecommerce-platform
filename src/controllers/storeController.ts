import { Request, Response } from 'express';
import Store from '../models/Store';

const createStore = async (req: Request, res: Response) => {
  const { name, ownerId } = req.body;
  const store = await Store.create({ name, ownerId });
  res.status(201).json(store);
};
 

export { createStore };
