import { BusinessInfo } from "./business-info";

export interface Vacancy {
    id: string,

    businessId: string,
    businessInfo: BusinessInfo,

    position: string,
    title: string;
    days: string;
    status:string;
    contract: string;
    mode: string;
    description: string;
    skills: Array<string>;
    showedInterest: Array<string>;
}
