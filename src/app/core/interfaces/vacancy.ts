import { BusinessInfo } from "./business-info";

export interface Vacancy {
    id: string,

    businessId: string,
    businessInfo: BusinessInfo,

    vacancyArea: string,
    title: string;
    days: string;
    status:string;
    contract: string;
    modality: string;
    serniority:string;
    description: string;
    skills: Array<string>;
    daysOfWeek:string[];
    period:string;
    shift:string;
    showedInterest: Array<string>;
}
