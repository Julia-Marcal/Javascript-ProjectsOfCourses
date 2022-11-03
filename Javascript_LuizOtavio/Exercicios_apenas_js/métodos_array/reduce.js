const numeros = [5, 50, 20, 60 , 2 ,7,11,29];

const soma_total = numeros.reduce((acumulador, valor, indice, array) =>{
    return acumulador += valor
}, 0 /*acumulador*/);

const pessoas = [
    {nome: 'João', idade: 18},
    {nome: 'Vitor', idade: 22},
    {nome: 'Luiz', idade: 18},
    {nome: 'Tania', idade: 30},
    {nome: 'Jorge', idade: 27},
    {nome: 'Marcelo', idade: 41},
    {nome: 'Vanessa', idade: 57},
]

const maisVelha = pessoas.reduce((acumulador, valor ) =>{
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})