window.addEventListener("DOMContentLoaded", function () {
    //primero identifico el color activo por defecto
    let elemento = document.querySelector('#paleta .seleccionado');
    let estilos = getComputedStyle(elemento);
    let colorActivo = estilos.backgroundColor;
    let pincelActivado=false;


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
                // celda.addEventListener('mouseover');
                // celda.style.backgroundColor="red";
            } 
        }
    }
    
    function seleccionarColorPaleta(event){
        let tdColorSel = document.querySelector('#paleta .seleccionado');//seleccionado que es hijo
        tdColorSel.classList.remove("seleccionado");
    
        event.target.classList.add('seleccionado');
        let estilos = getComputedStyle(event.target);
        colorActivo = estilos.backgroundColor;

    }

    let tablaColores = document.getElementById("paleta");
    let celdasColores = tablaColores.getElementsByTagName("td");
    //pongo el mismo listener para el evento click a todas las celdas de colores de la paleta
    for(let i=0;i<celdasColores.length;i++){
        celdasColores[i].addEventListener('click',seleccionarColorPaleta);
    }
    
    
    function togglePincel(){
        pincelActivado = !pincelActivado;
        if(pincelActivado){
            document.getElementById('pincel').textContent='Pincel activado';
        }else{
            document.getElementById('pincel').textContent='Pincel desactivado';
        }
    
    }

    function pintar (event){
        if(pincelActivado){//solo pinta si el pincel esta activado
            event.target.style.backgroundColor = colorActivo;
        }
    }
    //pongo a escuchar a todas las celdas
    let celdas = document.querySelectorAll('#zonadibujo td');
    for (let i=0;i<celdas.length;i++){
        celdas[i].addEventListener('click',togglePincel);//añado el evento click para activar/desactivar el pincel
        celdas[i].addEventListener('mouseover',pintar);//añado evento mouseover para pintar
    }



});