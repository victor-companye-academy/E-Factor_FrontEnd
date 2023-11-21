export interface CardProfessional {
    id:number;
    userName: string;
    title: string;
    description:string;
    locality:string;
    skills:Array<string>;
    src?:string;
}
