import { Request, Response } from "express";
import AuthenticatedUsersService from "@services/AuthenticateUsersServices";

export class AuthenticatedUsersController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticatedUsersService = new AuthenticatedUsersService();

    const token = await authenticatedUsersService.execute({
      email,
      password,
    });

    return response.json({ token: token });
  }
}
