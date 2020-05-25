import { Application } from "express";
import { Request, Response } from "express-serve-static-core";
import { isAuthenticated } from "../../middleware/is.authenticated.middleware";
import { CacheService } from "../../logic/cache.service";

const mapGetUserRoute = (server: Application) => {
  server.get("/user", isAuthenticated, async (req: Request, res: Response) => {
    const user = CacheService.GetUserBy(res.locals.id);
    if (!user) return res.answer(400, "User not found");

    return res.populate(user);
  });
};

export default mapGetUserRoute;
