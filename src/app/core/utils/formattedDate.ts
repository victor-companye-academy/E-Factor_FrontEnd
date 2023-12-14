export function formattedDate(date:Date):string{
    let dia = String(date.getDate()).padStart(2, '0').toString();
    let mes = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, por isso soma 1
    let ano = date.getFullYear();
  
    // Retorna a data formatada
    return `${dia}/${mes}/${ano}`;

}