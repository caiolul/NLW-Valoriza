import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";
import { UserRepositories } from "@repositories/UserRepositories";

export class ListUsersServices {
  async execute() {
    const userRepositories = getCustomRepository(UserRepositories);

    const listUser = await userRepositories.find({});

    return classToPlain(listUser);
  }
}
