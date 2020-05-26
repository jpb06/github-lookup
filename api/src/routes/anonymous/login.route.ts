import { Application } from "express";
import { Request, Response } from "express-serve-static-core";
import { body } from "express-validator";
import { CachedUsersService } from "../../logic/services/cached.users.service";
import {
  getAccessToken,
  AccessToken,
} from "../../logic/github-api/get.access.token";
import { getUserData } from "../../logic/github-api/get.user.data";
import { JwtService } from "../../logic/services/jwt.service";
import { withInputFeedback } from "../../middleware/validation.errors.middleware";

const mapLoginRoute = (server: Application) => {
  server.post(
    "/login",
    [
      body("code").not().isEmpty().withMessage("the code wasn't provided"),
      body("state").not().isEmpty().withMessage("state wasn't provided"),
    ],
    withInputFeedback,
    async (req: Request, res: Response) => {
      try {
        const accessToken = await getAccessToken(req.body.code, req.body.state);
        if (!accessToken.success)
          return res.answer(400, "Authentication failure");

        const userData = await getUserData(accessToken.data as AccessToken);
        if (!userData.success)
          return res.answer(400, "Unable to get user profile");

        CachedUsersService.Set({
          ...userData.data,
          token_type: accessToken.data?.type,
          access_token: accessToken.data?.token,
        });
        const token = await JwtService.generate(userData.data.id);

        return res.populate(token);
      } catch (err) {
        console.log(err.message);
        return res.answer(400, err.message);
      }
    }
  );
};

export default mapLoginRoute;
