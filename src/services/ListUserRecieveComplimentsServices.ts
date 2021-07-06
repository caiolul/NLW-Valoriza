import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "@repositories/ComplimentRepositories";

export class ListUserRecieveComplimentsServices {
  async execute(user_id: string) {
    const complimentRepositories = getCustomRepository(ComplimentRepositories);

    const compliment = await complimentRepositories.find({
      where: {
        user_reciever: user_id,
      },
    });
    return compliment;
  }
}
