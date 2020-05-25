import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export async function withInputFeedback(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.answer(400, errors.array());

  next();
}
