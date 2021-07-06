import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "@repositories/ComplimentRepositories";
import { UserRepositories } from "@repositories/UserRepositories";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_reciever: string;
  message: string;
}

export class CreateComplimentServices {
  async execute({
    tag_id,
    user_reciever,
    user_sender,
    message,
  }: IComplimentRequest) {
    const complimentRepositories = getCustomRepository(ComplimentRepositories);
    const userRepositories = getCustomRepository(UserRepositories);

    if (user_reciever === user_sender) {
      throw new Error("Incorrect reciever!");
    }

    const userRecieverExists = await userRepositories.findOne(user_reciever);

    if (!userRecieverExists) {
      throw new Error("User not exists!");
    }

    const compliment = complimentRepositories.create({
      tag_id,
      user_reciever,
      user_sender,
      message,
    });

    await complimentRepositories.save(compliment);

    return compliment;
  }
}
