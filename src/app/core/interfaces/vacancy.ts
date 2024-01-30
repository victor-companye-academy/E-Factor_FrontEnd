import { AddressCompany } from "./address-company";

export interface Vacancy {
    idVaga: string,
    idEmpresa: string,
    
    ativo:boolean;
    endereco: AddressCompany,
    email:string,
    telefone:string,
    fotoPerfil: string,
    fotoCapa:any,
    nomeEmpresa:string,
    tituloVaga: string,
    tipoContrato: string,
    modalidade: string,
    senioridade:string,
    descricaoVaga: string,
    habilidades: Array<string>,
    horaInclusao:string,
    showedInterest:string[]

// ------------------------------------------------------------

    // id: string,

    // businessId: string,
    // businessInfo: BusinessInfo,
    // vacancyArea: string,
    // title: string,
    // day: string;
    // status:string;
    // contract: string;
    // modality: string;
    // serniority:string;
    // description: string;
    // skills: Array<string>;
    // daysOfWeek:string[];
    // period:string;
    // shift:string;
    // showedInterest: Array<string>;
    // createDate:string;
    // expirationDate: string;
}
