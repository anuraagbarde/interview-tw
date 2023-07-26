import express from 'express';
const router = express.Router();

import UserService from '../services/UserService.js';
import { BadRequestError } from '../utils/error.js';

const tryCatchWrapper = (fn: (req: express.Request, res: express.Response) => express.Response) => {
  return (req: express.Request, res: express.Response) => {
    try {
      fn(req, res);
    } catch (err) {
      console.log(err);
      if (err instanceof BadRequestError) return res.status(err.httpCode).json({ error: err, message: err.message });
      if (err instanceof Error) return res.status(500).json({ error: err, message: err.message });
      res.status(500).json({ error: err, message: 'Internal Server Error!' });
      return res;
    }
  };
};

router.get(
  '/:userId/summary',
  tryCatchWrapper((req, res) => {
    const inputUser = req.params.userId;
    const response = UserService.getUserSummary(inputUser);

    res.status(200).json(response);
    return res;
  })
);

export default router;
