import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUserServices {
  async execute({ name, email, admin }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);
    if (!email) {
      throw new Error("Email incorret!");
    }
    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const user = userRepository.create({
      name,
      email,
      admin,
    });
    await userRepository.save(user);

    return user;
  }
}
