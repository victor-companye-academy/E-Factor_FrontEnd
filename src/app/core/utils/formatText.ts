export function formatText(value: string) {
    const regex = /[\u0300-\u036f]/g
    const formated: string = value.normalize('NFD').replace(regex, "");

    return formated;
}