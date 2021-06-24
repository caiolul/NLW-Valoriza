import { Request, Response } from "express";
import { CreateTagServices } from "../services/CreateTagServices";

export class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const createTagService = new CreateTagServices();

    const tag = await createTagService.execute(name);

    return response.json(tag);
  }
}