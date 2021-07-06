import { EntityRepository, Repository } from "typeorm";
import { User } from "@models/User";

@EntityRepository(User)
export class UserRepositories extends Repository<User> {}
