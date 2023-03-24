import { parse } from "url";
import next from "next";
import e from "express";
import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

const logger = new Logger("AppBootstrap");
const { NODE_ENV = "development", CLIENT_PORT = 3000, BACKEND_PORT = 3500 } = process.env;

const isProduction = NODE_ENV === "production";

(async () => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api/v1");

  if (isProduction) {
    const nextApp = next({ dev: false, dir: "../client" });
    const handle = nextApp.getRequestHandler();
    app.use(async (req: e.Request, res: e.Response, next: e.NextFunction) => {
      const parsedUrl = parse(req.url, true);
      const isApiRequest =
        parsedUrl.pathname?.startsWith("/api") &&
        req.app._router.stack.find((r: any) => r.route && r.route.path === parsedUrl.pathname);
      if (isApiRequest) return next();
      return handle(req, res, parsedUrl);
    });
  } else {
    app.enableCors({ origin: `http://localhost:${CLIENT_PORT}` });
  }

  await app.listen(BACKEND_PORT, () => logger.log(`http://localhost:${BACKEND_PORT}`));
})();
