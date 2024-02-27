export interface ResponseNewVacancy {
    id: number,
    titulo: string,
    descricao: string,
    modalidade: string,
    tipoContrato: string,
    senioridade: string,
    habilidades: Array<number>,
}
