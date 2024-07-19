import { Request, Response } from 'express';
import CartItem from '../models/CartItem';

const addToCart = async (req: Request, res: Response) => {
  const { productId, quantity, userId } = req.body;
  const cartItem = await CartItem.create({ productId, quantity, userId });
  res.status(201).json(cartItem);
};
 

export { addToCart };
