import { Request, Response } from "express";
import { ListUsersServices } from "../services/ListUsersServices";

export class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersServices = new ListUsersServices();

    const listTags = await listUsersServices.execute();

    return response.json(listTags);
  }
}
