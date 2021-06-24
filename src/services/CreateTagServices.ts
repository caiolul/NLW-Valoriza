import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";

export class CreateTagServices {
  async execute(name: string) {
    const tagRepositories = getCustomRepository(TagRepositories);

    if (!name) {
      throw new Error("Name is require!");
    }
    const tagAlreadyExists = await tagRepositories.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }
    const tag = tagRepositories.create({ name });
    await tagRepositories.save(tag);

    return tag;
  }
}
