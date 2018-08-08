(function(){
    "use strict"

    var regalo = document.getElementById("regalo");

    document.addEventListener("DOMContentLoaded", function(){

        // Variables de Datos de Usuario
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var email = document.getElementById("eMail");

        // Variables de los pases
        var pasePorDia = document.getElementById("pase_dia");
        var paseCompleto = document.getElementById("pase_completo");
        var paseDosDias = document.getElementById("pase_dos_dias");

        // Botones y Divs
        var calcular = document.getElementById("calcular");
        var errorDiv = document.getElementById("error");
        var btnRegistro = document.getElementById("btnRegistro");
        var resultado = document.getElementById("lista-productos");

        // Variables de Extras
        var camisas = document.getElementById("camisa_evento");
        var etiquetas = document.getElementById("etiquetas");
        var sumaTotal = document.getElementById("suma-total");

        calcular.addEventListener("click", function(event){
            event.preventDefault();

            var total = 0;
            var listadoCompra = [];

            if(regalo.value === ""){
                alert("Debes elegir un regalo");
                regalo.focus();
            } else{
                var subTotal1 = pasePorDia.value*30 + paseDosDias.value*45 + paseCompleto.value*50;
                var subtotal2 = camisas.value * 10 * .93 + etiquetas.value * 2;
                total = subTotal1 + subtotal2;
            };


            if(pasePorDia.value != 0){
                if( parseInt(pasePorDia.value) === 1){
                    listadoCompra.push(pasePorDia.value + " pase por dia");
                } else {
                    listadoCompra.push(pasePorDia.value + " pases por dia");
                };
            };

            if(paseDosDias.value != 0){
                if( parseInt(paseDosDias.value) === 1){
                    listadoCompra.push(paseDosDias.value + " pase por 2 dias");
                } else{
                    listadoCompra.push(paseDosDias.value + " pases por 2 dias");
                };
            };

            if(paseCompleto.value != 0){
                if( parseInt(paseCompleto.value) === 1){
                    listadoCompra.push(paseCompleto.value + " pase completo");
                } else{
                    listadoCompra.push(paseCompleto.value + " pases completo");
                };
            };

            if(camisas.value != 0){
                if( parseInt(camisas.value) === 1){
                    listadoCompra.push(camisas.value + " camisa del evento");
                } else{
                    listadoCompra.push(camisas.value + " camisas del evento");
                };
            };

            if(etiquetas.value != 0){
                if( parseInt(camisas.value) === 1){
                    listadoCompra.push(etiquetas.value + " juego de etiquetas");
                } else{
                    listadoCompra.push(etiquetas.value + " juegos de etiquetas");
                };
            };

            resultado.innerHTML = "";
            for(var i = 0 ; i < listadoCompra.length ; i++){
                resultado.innerHTML += listadoCompra[i];
                if(i < listadoCompra.length - 1){
                    resultado.innerHTML += "</br>";
                };
            };

            sumaTotal.innerHTML = "$ " + total.toFixed(2);

        });

    });
})();