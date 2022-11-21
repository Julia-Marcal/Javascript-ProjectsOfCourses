const numeros = [5, 50, 20, 60 , 2 ,7,11,29];

const numeros_dobrados = numeros.map((valor) =>{
    return valor *= 2
})

const pessoas = [
    {nome: 'João', idade: 18},
    {nome: 'Vitor', idade: 22},
    {nome: 'Luiz', idade: 18},
    {nome: 'Tania', idade: 30},
    {nome: 'Jorge', idade: 27},
    {nome: 'Marcelo', idade: 41},
    {nome: 'Vanessa', idade: 57},
]


const nomes_obj = pessoas.map((obj) =>{
    return obj.nome
})

const idades = pessoas.map((obj)=>{
    return {idade: obj.idade};
})

const obj_com_id = pessoas.map((obj, indice) =>{
    obj.id = indice + 1;
    return obj
})
console.log(pessoas)