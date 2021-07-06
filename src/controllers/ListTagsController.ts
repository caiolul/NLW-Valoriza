import { Request, Response } from "express";
import { ListTagsServices } from "@services/ListTagsServices";

export class ListTagsController {
  async handle(request: Request, response: Response) {
    const listTagsServices = new ListTagsServices();

    const listTags = await listTagsServices.execute();

    return response.json(listTags);
  }
}
