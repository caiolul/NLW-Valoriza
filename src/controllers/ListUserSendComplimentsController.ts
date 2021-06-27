import { Request, Response } from "express";
import { ListUserSendComplimentsServices } from "../services/ListUserSendComplimentsServices";

export class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserSenderComplimentsService =
      new ListUserSendComplimentsServices();
    const listUserSend = await listUserSenderComplimentsService.execute(
      user_id
    );

    return response.json(listUserSend);
  }
}
