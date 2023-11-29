import { Professional } from "./professional";
import { Vacancy } from "./vacancy";

export interface SessionStorage {
    vacancies?:Array<Vacancy>,
    companies?:Array<any>,
    professioanls?:Array<Professional>
}
