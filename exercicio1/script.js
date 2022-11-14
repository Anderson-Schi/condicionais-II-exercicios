// Crie um código que receba um número por prompt e verifique se um número é divisível por 2 ou por 3
const num1 = prompt("Digite um numero: ");
const rNum1 = Number(num1);

if((rNum1%2) === 0 ||(rNum1%3) === 0){
    console.log(`O numero digitado ${rNum1} e divisivel por 2 ou 3`)

}else{
    console.log(`O numero digitado ${rNum1} nao e divisivel por 2 ou 3`)
};
