import { Request, Response } from "express";
import { CreateUserServices } from "../services/CreateUserServices";

export class CreateUserController {
  async handle(request: Request, resposnse: Response) {
    const { name, email, admin } = request.body;

    const createUserServices = new CreateUserServices();

    const user = await createUserServices.execute({
      name,
      email,
      admin,
    });

    return resposnse.json(user);
  }
}
