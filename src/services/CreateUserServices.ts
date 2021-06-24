import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUserServices {
  async execute({ name, email, admin }: IUserRequest) {
    const userRepositories = getCustomRepository(UserRepositories);
    if (!email) {
      throw new Error("Email incorret!");
    }
    const userAlreadyExists = await userRepositories.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const user = userRepositories.create({
      name,
      email,
      admin,
    });
    await userRepositories.save(user);

    return user;
  }
}
