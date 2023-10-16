export interface CardVacacy {
    src?: string;
    companyName: string
    title: string;

    days: string;
    status?:string;

    description: string;

    locality: string;
    skills: Array<string>;
    mode: string;
    contract: string;
}
