import { Application } from "express";
import { Request, Response } from "express-serve-static-core";

const mapIndexRoutes = (server: Application) => {
  server.get("/", (req: Request, res: Response) =>
    res.answer(200, "Githublookup api. See /api")
  );
  server.get("/api", (req: Request, res: Response) =>
    res.answer(200, "Githublookup api")
  );
};

export default mapIndexRoutes;
