function criaCalculadora()
{
    return {

        display: document.querySelector('.display'),



        inicia: function inicia(){
            this.cliqueBotoes();
            this.botaoEnter();
        },

        cliqueBotoes() {
            
            document.addEventListener('click', (e)=>{

                const el = e.target;
                
                if(el.classList.contains('btnNum'))
                {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btnClear'))
                {
                    this.clear();
                }
                if(el.classList.contains('btnEqual'))
                {
                    this.calcular();
                }

                this.display.focus();

            });

        },

        btnParaDisplay(valor)
        {
            this.display.value += valor;
        },

        clear(){
            this.display.value='';
        },

        calcular(){
            try {
                const resultado = eval(this.display.value);

                
                this.clear();
                this.btnParaDisplay(Number(resultado));
            } 
            catch (error) 
            {
                window.alert('Erro');
                this.clear();
            }
        },

        botaoEnter(){
            this.display.addEventListener('keyup', (e)=>{
                if(e.keyCode==13)
                {
                    this.calcular();
                }
            })
        }

    }
}


const calculadora = criaCalculadora();

calculadora.inicia();