import { Router } from "express";
import { CherryRouter } from "./router";
import { DarazScrapperController } from "@src/modules/daraz/daraz.controller";

class ProxyRouter {
  private static instance: ProxyRouter;
  private router = CherryRouter;

  // *** *** CONTROLLER INJECTION? LOL
  // all new controller module will go here
  private readonly routes = [
    {
      segment: "/daraz",
      provider: DarazScrapperController,
    },
  ];

  static get(): ProxyRouter {
    if (!ProxyRouter.instance) {
      ProxyRouter.instance = new ProxyRouter();
    }
    return ProxyRouter.instance;
  }

  map(): Router {
    this.routes.forEach((route) => {
      const instance = new route.provider() as { router: Router };
      this.router.use(route.segment, instance.router);
    });
    return this.router;
  }
}

const proxuRouter = ProxyRouter.get();

export { proxuRouter as ProxyRouter };
