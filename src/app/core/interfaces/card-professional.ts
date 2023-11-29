export interface CardProfessional {
    id: string,
    photo: string,
    name: string,
    age?: string,
    city: string,
    state: string,
    email?: string,
    cellphone?: string,
    seniority?: string,
    about: string,
    experience?: Array<{ institution: string, start: string, end: string, current: boolean, role: string, description: string }>,
    education?: Array<{ institution: string, start: string, end: string, current: boolean, title: string, description: string }>,
    skills: Array<string>,
    languages?: Array<{ language: string, level: string}>
}
