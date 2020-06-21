import { Application } from "express";
import { Request, Response } from "express-serve-static-core";
import { isAuthenticated } from "../../middleware/is.authenticated.middleware";
import { CachedUsersService } from "../../logic/services/cached.users.service";
import { searchCode } from "../../logic/github-api/search.code";
import { withInputFeedback } from "../../middleware/validation.errors.middleware";
import { body } from "express-validator";

const mapSearchCodeRoute = (server: Application) => {
  server.post(
    "/api/search/code",
    isAuthenticated,
    [
      body("language")
        .not()
        .isEmpty()
        .withMessage("A language wasn't provided"),
      body("term").not().isEmpty().withMessage("A search term wasn't provided"),
      body("page")
        .not()
        .isEmpty()
        .isInt()
        .withMessage("A page number wasn't provided"),
    ],
    withInputFeedback,
    async (req: Request, res: Response) => {
      const user = CachedUsersService.GetBy(res.locals.id);
      if (!user) return res.answer(400, "User not found");

      const result = await searchCode(
        {
          type: user.token_type,
          token: user.access_token,
        },
        req.body.language,
        req.body.term,
        req.body.page
      );

      return res.populate(result.data);
    }
  );
};

export default mapSearchCodeRoute;
