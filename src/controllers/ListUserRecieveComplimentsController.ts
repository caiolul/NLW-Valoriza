import { Request, Response } from "express";
import { ListUserRecieveComplimentsServices } from "../services/ListUserRecieveComplimentsServices";

export class ListUserRecieveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserRecieverComplimentsService =
      new ListUserRecieveComplimentsServices();

    const listUserRecieve = await listUserRecieverComplimentsService.execute(
      user_id
    );

    return response.json(listUserRecieve);
  }
}
