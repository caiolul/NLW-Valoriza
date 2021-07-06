import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "@models/Compliment";

@EntityRepository(Compliment)
export class ComplimentRepositories extends Repository<Compliment> {}
