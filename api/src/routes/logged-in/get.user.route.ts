import { Application } from "express";
import { Request, Response } from "express-serve-static-core";
import { isAuthenticated } from "../../middleware/is.authenticated.middleware";
import { CachedUsersService } from "../../logic/services/cached.users.service";

const mapGetUserRoute = (server: Application) => {
  server.get("/user", isAuthenticated, async (req: Request, res: Response) => {
    const user = CachedUsersService.GetBy(res.locals.id);
    if (!user) return res.answer(400, "User not found");

    return res.populate(user);
  });
};

export default mapGetUserRoute;
