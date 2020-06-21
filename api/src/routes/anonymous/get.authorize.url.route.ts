import { Application } from "express";
import { Request, Response } from "express-serve-static-core";
import { query } from "express-validator";
import { withInputFeedback } from "../../middleware/validation.errors.middleware";

const mapGetAuthorizeUrlRoute = (server: Application) => {
  server.get(
    "/api/authorize-url",
    [
      query("scope").not().isEmpty().withMessage("scope cannot be empty"),
      query("state").not().isEmpty().withMessage("state cannot be empty"),
    ],
    withInputFeedback,
    async (req: Request, res: Response) => {
      const scope = req.query.scope;
      const state = req.query.state;

      const domain = process.env.GITHUB_DOMAIN as string;
      const clientId = process.env.GITHUB_CLIENT_ID as string;
      const redirectUrl = process.env.GITHUB_REDIRECT_URI as string;
      const authorizeUrl = `${domain}/authorize?client_id=${clientId}&scope=${scope}&state=${state}`;

      return res.populate(authorizeUrl);
    }
  );
};

export default mapGetAuthorizeUrlRoute;
