import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";
import { classToPlain } from "class-transformer";

export class ListTagsServices {
  async execute() {
    const tagRepositories = getCustomRepository(TagRepositories);

    const listTags = await tagRepositories.find({});

    return classToPlain(listTags);
  }
}
