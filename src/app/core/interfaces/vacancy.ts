import { AddressCompany } from "./address-company";

export interface Vacancy {
    idVaga?: number,
    idEmpresa: number,
    
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
}
