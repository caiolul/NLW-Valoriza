import { Router } from "express";
import { AuthenticatedUsersController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const routes = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticatedUsersController = new AuthenticatedUsersController();
const createComplimentController = new CreateComplimentController();

routes.post("/user", createUserController.handle);
routes.post("/compliment", createComplimentController.handle);
routes.post("/session", authenticatedUsersController.handle);
routes.post("/tag", ensureAdmin, createTagController.handle);

export { routes };
