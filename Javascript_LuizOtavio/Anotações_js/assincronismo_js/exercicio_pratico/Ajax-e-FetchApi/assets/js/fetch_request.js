//Fetch já retorna por padrão uma promise
fetch('pagina1.html')
  .then(resposta => {
    if(resposta.status !== 200) throw new Error('Erro 404')
    return resposta.text()
    //retorna outra promisse ent é necessário um then
  })
  .then(html => c)
  .catch(e => console.error(e));
  //msm coisa q log só q em vermelho


document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try{  
    const href = el.getAttribute('href');
    const response = await fetch(href)
    
    if(response.status !== 200) throw new Error('ERRO 404!')
    
    //converter os dados para testo pq fetch não tem reconhecimento de dados
    const html = await response.text()
    carregaResultado(html)
  }catch(e){
    console.log(e)
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}  