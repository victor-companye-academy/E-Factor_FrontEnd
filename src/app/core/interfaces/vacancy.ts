
export interface Vacancy {
    idVaga: string,

    idEmpresa: string,
    fotoPerfil: string;
    fotoCapa:any,
    nomeEmpresa:string,
    // businessInfo: BusinessInfo,
    // vacancyArea: string,
    tituloVaga: string;
    // day: string;
    ativo:boolean;
    tipoContrato: string;
    modalidade: string;
    senioridade:string;
    descricaoVaga: string;
    habilidades: Array<string>;
    // daysOfWeek:string[];
    // period:string;
    // shift:string;
    horaInclusao:string;
    showedInterest:string[]

// ------------------------------------------------------------

    // id: string,

    // businessId: string,
    // businessInfo: BusinessInfo,
    // vacancyArea: string,
    // title: string;
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
