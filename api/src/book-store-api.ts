import * as dotenv from "dotenv";
const envLoadingResult = dotenv.config();
if (envLoadingResult.error) {
  console.log(envLoadingResult.error.message);
  process.exit(1);
}

import * as express from "express";
import { Express } from "express-serve-static-core";
import * as bodyParser from "body-parser"; // pull information from HTML POST (express4)
import * as cors from "cors";

import extendsImplementation from "./middleware/extends.implementation.middleware.js";
import ErrorHandler from "./middleware/errors.handler.middleware.js";
import NoRouteErrorHandler from "./middleware/no.route.error.handler.middleware.js";
import mapLoginRoute from "./routes/anonymous/login.route.js";
import mapGetAuthorizeUrlRoute from "./routes/anonymous/get.authorize.url.route.js";

import { Configuration as RsaStoreConfiguration } from "rsa-vault";
import { getRsaVaultConfig } from "./logic/util/config.util.js";
import mapGetUserRoute from "./routes/logged-in/get.user.route.js";
RsaStoreConfiguration.Setup(getRsaVaultConfig());

const app: Express = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(extendsImplementation);

// simulate delay
app.use((req, res, next) => setTimeout(next, 1500));

// anonymous
mapGetAuthorizeUrlRoute(app);
mapLoginRoute(app);

// logged in
mapGetUserRoute(app);

app.use(ErrorHandler);
app.use(NoRouteErrorHandler);

app.set("port", 3001);

var server = app.listen(app.get("port"), "", () => {
  console.log("Github lookup dev api running on port 3001");
});
