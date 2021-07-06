import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "@repositories/UserRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export default class AuthenticatedUsersService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UserRepositories);

    const user = await userRepositories.findOne({ email });

    if (!user) {
      throw new Error("Email/Password incorrect!");
    }
    const passwordVerify = await compare(password, user.password);

    if (!passwordVerify) {
      throw new Error("Email/Password incorrect!");
    }
    const token = sign(
      {
        email: user.email,
      },
      process.env.KEY,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );
    return token;
  }
}
