//Crie uma estrutura com o switch-case que verifique se a nacionalidade guardada na const nacionalidade, é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O programa deve imprimir "nacionalidade não encontrada" caso o valor de nacionalidade não corresponda a nenhum dos valores.
let nacionalidade = prompt("digite aqui a seu Pais de origem").toLowerCase();

/* if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}

console.log("teste 2")  */

switch(nacionalidade){
    case "brasil":
        console.log("a pessoa é do Brasil!");
    break;

    case "argentina":
        console.log("a pessoa é da Argentina!");
    break;

    case "uruguai":
        console.log("a pessoa é do Uruguai!");
    break;

    case "chile":
        console.log("a pessoa é do Chile!");
    break;

    case "colombia":
        console.log("a pessoa é da Colômbia!");
    break;
    default:
        console.log(`Nacionalidade: ${nacionalidade}, nao encontrada.`);
}

