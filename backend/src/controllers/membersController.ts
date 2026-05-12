import { Request, Response } from 'express';
import { Member } from '../models/member';

export const getAllMembers = async (req: Request, res: Response) => {
  const members = await Member.findAll();
  res.json(members);
};

export const createMember = async (req: Request, res: Response) => {
  try {
    const m = await Member.create(req.body);
    res.status(201).json(m);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data', details: err });
  }
};
