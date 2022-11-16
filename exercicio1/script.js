// Crie um código que receba um número por prompt e verifique se um número é divisível por 2 ou por 3
const num1 = Number(prompt("Digite um numero: "));
//const rNum1 = Number(num1);

//aninhado
if(num1%2 === 0){
    console.log(`O numero ${num1} e divisivel por 2`)
    if(num1%3 === 0){
        console.log(`O numero ${num1} tambem e divisivel por 3`)
    }
}else if(num1%3 === 0){
    console.log(`O numero ${num1} e divisivel por 3`)
    if(num1%2 === 0){
        console.log(`O numero ${num1} tambem e divisivel por 2`)
    }
}else{
    console.log(`O numero ${num1} nao e divisivel por 2 ou por 3`)
};

//usando operador logico ||
if((num1%2) === 0 ||(num1%3) === 0){
    console.log(`O numero digitado ${num1} e divisivel por 2 ou 3`)

}else{
    console.log(`O numero digitado ${num1} nao e divisivel por 2 ou 3`)
};

