
var i0=document.getElementById("i0")
var i1=document.getElementById("i1")
var i2=document.getElementById("i2")
var i3=document.getElementById("i3")
var item=false
var subNivel=-1
var secuencia=false

//console.log('Inicia y secuencia es igual a ' +secuencia)///////////////////////////////////

function jugar(){
    //console.log('boton pulsar y secuencia es ' + secuencia)///////////////////////////////////
    this.document.getElementById("nivel").innerHTML='Nivel: 1'
    this.document.getElementById("mensaje").innerHTML=''
    CalcularSecuencia()
    IluminarSecuencia()
    btn.hidden=true
    nivel.hidden=false
}
function VerificarItem(){
    if(this.secuencia){
        //console.log('-----------verificar item arranca, subnivel es ' + this.subNivel)
        this.subNivel++
        //console.log('se va a comparar item =' + this.item + ' con secuencia[subnibvel]' + this.secuencia[this.subNivel] +' subnivel es ' + this.subNivel)///////////////////////////////////
        if(this.item==this.secuencia[this.subNivel]){
            //console.log('bien coincidieron. Se va a mirar si pasa de nivel comparando subnivel+1 = ' + (this.subNivel+1) + ' con longitud de secuencia' + this.secuencia.length)/////////////////////////////////
            if(this.subNivel+1==this.secuencia.length){
                this.subNivel=-1
                //console.log("pasa nivel. el nuevo valor de subnivel es "+ this.subNivel)///////////////////////////
                CalcularSecuencia()
                IluminarSecuencia()
                this.document.getElementById("nivel").innerHTML='Nivel: '+ this.secuencia.length
            }else{
                //console.log('no pasa de nivel pero pasa de subnivel')////////////////////////////////
            }
        }else{
            //console.log('perdiste no coincidio ' + this.item + ' con secuencia de subnivel' + this.secuencia[this.subNivel])//////////////////////////////////
            this.document.getElementById("mensaje").innerHTML='PERDISTE!!'
            this.btn.hidden=false
            this.nivel.hidden=false
            this.item=false
            this.subNivel=-1
            this.secuencia=false
        }
    }
}
function CLickItem0(){
    item=i0.getAttribute("data-NumCaja")
    VerificarItem()
}
function CLickItem1(){
    item=i1.getAttribute("data-NumCaja")
    VerificarItem()
}
function CLickItem2(){
    item=i2.getAttribute("data-NumCaja")
    VerificarItem()
}
function CLickItem3(){
    item=i3.getAttribute("data-NumCaja")
    VerificarItem()
}

function CalcularSecuencia(){
  if(!secuencia){
    secuencia= [Math.floor(4*Math.random())]
    //console.log('primera vez que se calcula secuencia. Quedo ' + secuencia)
  }else{
    secuencia.push(Math.floor(4*Math.random()))
    var subNivel=-1
    //console.log('se le agrega un nuevo valor a secuencia, quedo de longitud ' + secuencia.length + ' y valor  es ' + secuencia) /////////////////////////////////////////////////////
  }
}

async function IluminarSecuencia(){
    let tiempo=0
    await  secuencia.forEach(x=>{
        switch(x){
            case 0: 
                var colorAnt=i0.style.background
                tiempo+=300
                setTimeout(()=>i0.style.background ="black", tiempo); 
                tiempo+=300
                setTimeout(()=>i0.style.background =colorAnt, tiempo); 
                break;
            case 1: 
                var colorAnt=i1.style.background
                tiempo+=300;
                setTimeout(()=>i1.style.background ="black", tiempo); 
                tiempo+=300;
                setTimeout(()=>i1.style.background =colorAnt, tiempo); 
                break;
            case 2: 
                var colorAnt=i2.style.background
                tiempo+=300
                setTimeout(()=>i2.style.background ="black", tiempo); 
                tiempo+=300
                setTimeout(()=>i2.style.background =colorAnt, tiempo); 
                break;
            case 3: 
                var colorAnt=i3.style.background
                tiempo+=300
                setTimeout(()=>i3.style.background ="black", tiempo); 
                tiempo+=300
                setTimeout(()=>i3.style.background =colorAnt, tiempo); 
                break;
        }
    })
    //console.log('se ilumina la secuencia sin problemas')/////////////////////////////////
}
