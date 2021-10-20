function criaCalculadora()
{
    return {
        display: document.querySelector('.display'),
        
        inicia(){
            this.cliqueDosBotoes();
            
        },


        clearDisplay(){
            this.display.value="";
        },
    
        cliqueDosBotoes() {
            document.addEventListener('click', e =>{      
                
                const el = e.target;

                if(el.classList.contains("btnNum"))
                {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btnClear'))
                {
                    this.clearDisplay();
                }
            });

           
        },
        
       
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    
        
    };
    

    
}



var calculadora = criaCalculadora();
calculadora.inicia();
