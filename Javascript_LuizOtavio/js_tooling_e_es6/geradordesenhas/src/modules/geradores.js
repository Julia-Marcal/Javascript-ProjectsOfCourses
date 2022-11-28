const rand = (min, max) => Math.floor(Math.random() * (max - min ) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const GeraMinuscula = () => String.fromCharCode(rand(97,123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;=^[]{}!@$%&*()+-'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maisculas, minusculas, numeros, simbolos) {
  const SenhaArr = [];
  qtd = Number(qtd)

  for(let i = 0; i <= qtd; i++) {
    maisculas  && SenhaArr.push(geraMaiuscula());
    minusculas && SenhaArr.push(GeraMinuscula());
    numeros && SenhaArr.push(geraNumero());
    simbolos && SenhaArr.push(geraSimbolo());
  }

  return SenhaArra.join('').slice(0, qtd);
}


