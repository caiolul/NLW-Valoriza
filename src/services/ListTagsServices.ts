import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";
import { TagRepositories } from "@repositories/TagRepositories";

export class ListTagsServices {
  async execute() {
    const tagRepositories = getCustomRepository(TagRepositories);

    const listTags = await tagRepositories.find({});

    return classToPlain(listTags);
  }
}
