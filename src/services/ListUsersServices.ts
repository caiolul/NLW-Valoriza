import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

import { classToPlain } from "class-transformer";

export class ListUsersServices {
  async execute() {
    const userRepositories = getCustomRepository(UserRepositories);

    const listUser = await userRepositories.find({});

    return classToPlain(listUser);
  }
}
