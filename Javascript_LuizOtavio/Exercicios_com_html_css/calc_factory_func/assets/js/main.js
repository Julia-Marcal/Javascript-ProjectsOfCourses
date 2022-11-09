function criaCalculadora() {
  return {
    /*
    Não é necessário criar uma constante para
    guardar classes no querySelector
    */
    display: document.querySelector('.display'),
    bntClear: document.querySelector('.btn-clear'),
    
    inicia() {
    this.cliqueBotoes();
    this.pressionaEnter();
    },

    pressionaEnter(){
      document.addEventListener('keypress', e => {
        if (e.keyCode === 13){
          alert
          this.realizaConta();
        }
      });
    },
    
    clearDisplay(){
      this.display.value = '';
    },

    apagaUm(){
      //0 = tamanho da string, -1 é apagar
      this.display.value = this.display.value.slice(0, -1)
    },

    realizaConta(){
      /*
      eval funciona como um console de 
      javascript por isso pode ser perigoso seu uso
      */
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta){
          alert("Conta inválida");
          return;
        }

        this.display.value = conta;
      } catch(e){
          alert("Conta inválida");
          return;
      }
    },

    cliqueBotoes(){
      // this -> calculadora
      document.addEventListener('click', function(e) {
      //após o addEventListener o this é o própio document
        const element = e.target;


        //Se o botão clicado for um número
        if(element.classList.contains('btn-num')){
          this.btnParaDisplay(element.innerText);
        }
         
        //Se o botão clicado for o C de clear
        if(element.classList.contains('btn-clear')){
          this.clearDisplay();
        }

        //Se o botão clicado for o exluir (<<) 
        if (element.classList.contains('btn-del')){
          this.apagaUm();
        }

        if(element.classList.contains('btn-eq')){
          this.realizaConta();
        }
       //bind transforma o this na calculadora
       //arrow function não permite a mundaça de this com o bind
      }.bind(this)); 
    },

    btnParaDisplay(valor){
      this.display.value += valor;
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
