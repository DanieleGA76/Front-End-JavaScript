let preco = 20;
let quantidade = 3;
let total = preco * quantidade;
let dobro = total * 2;
let resto = total % 2;
let cupomValido = true;
let freteGratis = false;
let algumBeneficio = cupomValido || freteGratis;
let todoBeneficio = cupomValido && freteGratis;


document.getElementById("quantidade").innerHTML = quantidade;

document.getElementById("preço").innerHTML = preco;

document.getElementById("total").innerHTML = total;

document.getElementById("dobro").innerHTML = dobro;

document.getElementById("resto").innerHTML = resto;

document.getElementById("cupom").innerHTML = cupomValido? "Sim": "Não";

document.getElementById("frete").innerHTML = freteGratis? "Sim": "Não";

document.getElementById("algum").innerHTML = algumBeneficio? "Sim": "Não";

document.getElementById("todo").innerHTML = todoBeneficio? "Sim": "Não";