//copiar itens de outro objeto
const produto = {nome: 'Produto', preco: 1.8};
const caneca = Object.assign({}, produto, {material: 'porcelana'});


//copiar somente algumas propriedas:
const caneca_2 = {nome: produto.nome, preco: produto.preco};


//*é possível freezar um objeto


//Spread
const arr_1 = [3,4]
const arr_2 = [1,2,...arr_1,5]
//funciona da mesma maneira que assign


const f1_car = {pilot: 'Hamilton', year_chassi: 2022, team:'Mercedes'};
//* Passa as properties de uma propriedade do objeto

Object.defineProperty(f1_car, 'year_chassi',{
    writable: true,
    configurable: false,
    value: 2023
})


//Values
console.log(Object.values(f1_car));
//*da só o valor das chaves


//Entries
console.log(Object.entries(f1_car))
//* da o valor e sua "posição" em um array