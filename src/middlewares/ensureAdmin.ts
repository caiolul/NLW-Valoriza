import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "@repositories/UserRepositories";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const user_id = request.user_id;

  const userRepositories = getCustomRepository(UserRepositories);
  const userIsAdmin = await userRepositories.findOne(user_id);

  if (!userIsAdmin) {
    return response.status(400).json({
      error: "User not exists!",
    });
  }

  if (userIsAdmin.admin === true) {
    return next();
  }

  return response.status(401).json({
    error: "User not have permission!",
  });
}
