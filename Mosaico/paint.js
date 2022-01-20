window.addEventListener("DOMContentLoaded", function () {
    
    let colorActivo="";
    let pincelActivado=false;
    

    //función para añadir eventos
    function crearEvento(elemento,evento,miFuncion){
        elemento.addEventListener(evento,miFuncion);
    }

    //obtener Id
    function getId(elemento){
        return document.getElementById(elemento);
    }
    dibujarTablero();

    function dibujarTablero(){
        let div = document.getElementById('zonadibujo');
        let tabla = document.createElement('table');
        div.appendChild(tabla);    
        tabla.style.border = "1px solid black";
        for(let i=0;i<=30;i++){
            let fila = document.createElement('tr');
            tabla.appendChild(fila);
            for(let j=0;j<=30;j++){
                let celda = document.createElement('td');
                fila.appendChild(celda);
                celda.style.border = "1px solid black";
                celda.style.height = "10px";
                celda.style.width = "10px";
                celda.addEventListener('mouseover')
                // celda.style.backgroundColor="red";
            } 
        }
    }
    
    // function clasesActivas(){
    //     const elemento = document.addEventListener('click',function(){
    //          event.target;      
    //     });
    //     console.log(elemento);
    //     let clasesActivas = elemento.classList;
    //     console.log(clasesActivas);
    //     return clasesActivas;
    // } esto no sirve esta mal
    //let clases = document.addEventListener('click',clasesActivas());
    
    let tablaColores = getId("paleta");
    let celdasColores = tablaColores.getElementsByTagName("td");
    for(let i=0;i<celdasColores.length;i++){
        crearEvento(celdasColores[i],'click',detectarColorPaleta)
    }

    function detectarColorPaleta(){
        let clase = document.querySelector('seleccionado');
        let estilos = getComputedStyle(clase);
        let color = estilos.backgroundColor;
        return color;
    }
    
    let tabla = document.getElementsById('paleta');
    let td = tabla.firstChild.firstChild;
    let listaDeClases = td.classList;

    

    function pintar(){
        
        document.addEventListener('mouseover',function(){

        })
    }
    
    
    // function pincelActivado(){
        
    // }




});