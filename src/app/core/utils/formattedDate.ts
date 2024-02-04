export function formattedDate(date:Date):string{
    let day = String(date.getDate()).padStart(2, '0').toString();
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, por isso soma 1
    let year = date.getFullYear();
  
    // Retorna a data formatada
    return `${day}/${month}/${year}`;

}