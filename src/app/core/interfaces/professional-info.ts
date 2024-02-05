export interface ProfessionalInfo {
    id: string,
    photo: string,
    name: string,
    age: string,
    city: string,
    state: string,
    email: string,
    cellphone: string,
    seniority: string,
    about: string,
    experience: Array<{ institution: string, start: string, end: string, current: boolean, role: string, description: string }>,
    education: Array<{ institution: string, start: string, end: string, current: boolean, title: string, description: string }>,
    skills: Array<string>,
    languages: Array<{ language: string, level: string}>
    creationDate: string
    // fotoPerfil: string;
    // nomeCompleto: string;
    // dataNascimento: string;
    // status: boolean;
    // descricao: string;
    // senioridade: string;
    // contato: {
    //   email: string;
    //   telefone: string;
    // }
    // endereco: {
    //   logradouro: string;
    //   numero: number;
    //   complemento: string;
    //   bairro: string;
    //   cidade: string;
    //   estado: string;
    //   cep: string;
    // }
    // habilidades: Array<any>;
    // jornadas: Array<any>;
    // idiomas: Array<any>;
  }