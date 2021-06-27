import { Request, Response } from "express";
import { CreateComplimentServices } from "../services/CreateComplimentServices";

export class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, message, user_reciever, user_sender } = request.body;
    const createComplimentServices = new CreateComplimentServices();

    const compliment = await createComplimentServices.execute({
      tag_id,
      message,
      user_reciever,
      user_sender,
    });
    return response.json(compliment);
  }
}
