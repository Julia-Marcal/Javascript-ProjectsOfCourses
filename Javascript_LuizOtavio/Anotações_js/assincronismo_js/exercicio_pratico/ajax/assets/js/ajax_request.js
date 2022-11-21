/* EXPLICAÇÃO 
1 bloco
foi criada um request de xhr
*xhr.open('obj method/ação do open', 'URL', 'true se for assincrono/false se não')
!open é uma requisição para buscar algum conteudo 
*send inicia o request

2 bloco 
event listener pra achar o link clicado

3 bloco 
joga o link clicado no request para executar o link na promise xhr

4 bloco
abre o link no resultado
*/

const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
