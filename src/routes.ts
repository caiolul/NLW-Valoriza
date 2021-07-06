import { Router } from "express";
import { AuthenticatedUsersController } from "@controllers/AuthenticateUserController";
import { CreateComplimentController } from "@controllers/CreateComplimentController";
import { CreateTagController } from "@controllers/CreateTagController";
import { CreateUserController } from "@controllers/CreateUserController";
import { ListTagsController } from "@controllers/ListTagsController";
import { ListUserRecieveComplimentsController } from "@controllers/ListUserRecieveComplimentsController";
import { ListUsersController } from "@controllers/ListUsersController";
import { ListUserSendComplimentsController } from "@controllers/ListUserSendComplimentsController";
import { ensureAdmin } from "@middlewares/ensureAdmin";
import { ensureAuthenticate } from "@middlewares/ensureAuthenticate";

const routes = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticatedUsersController = new AuthenticatedUsersController();
const createComplimentController = new CreateComplimentController();
const listUserRecieveComplimentsController =
  new ListUserRecieveComplimentsController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

routes.get("/users", ensureAuthenticate, listUsersController.handle);

routes.post("/users", createUserController.handle);

routes.post("/compliments", createComplimentController.handle);

routes.post("/session", authenticatedUsersController.handle);

routes.get(
  "/user/list/compliments/send",
  ensureAuthenticate,
  listUserSendComplimentsController.handle
);

routes.get(
  "/user/list/compliments/recieve",
  ensureAuthenticate,
  listUserRecieveComplimentsController.handle
);

routes.get("/tags", ensureAuthenticate, listTagsController.handle);

routes.post(
  "/tags",
  ensureAuthenticate,
  ensureAdmin,
  createTagController.handle
);

export { routes };
