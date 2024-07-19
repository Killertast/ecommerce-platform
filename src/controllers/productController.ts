import { Request, Response } from 'express';
import Product from '../models/Product';

const createProduct = async (req: Request, res: Response) => {
  const { name, price, storeId } = req.body;
  const product = await Product.create({ name, price, storeId });
  res.status(201).json(product);
};
 

export { createProduct };
