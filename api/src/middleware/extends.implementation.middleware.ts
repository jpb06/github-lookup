import { Request, Response, NextFunction } from "express";

export default function extendsImplementation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.populate = function (data: any): Response {
    if (data === undefined) {
      return res.status(404).json(null);
    } else {
      return res.status(200).json(data);
    }
  };
  res.answer = (status: number, data: any): Response =>
    res.status(status).json(data);

  res.terminate = function (status: number, message: string): void {
    res.writeHead(status, { Connection: "close" });
    res.end(message);
  };

  next();
}
