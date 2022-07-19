
// ejemplo 1: verificacion tecnica vehicular

let patente=prompt("ingresa numero de patente para indicar la fila");

while(patente!="s"){
    switch(patente){
        case "abc123":
        case "ABC123":
            alert ("ingrese por fila 1");

            break; 
        case "asd111":
        case "ASD111":    
            alert ("ingrese por fila 2");

            break;
        case "kjk444":
        case "KJK444":   
            alert ("ingrese por fila 3");

            break;
        case "hvr124":
        case "HVR124":    
            alert ("ingrese por fila 4");

            break;
        default:
            alert ("Esta patente no se encuentra en el sistema");
            break;
    }
     patente=prompt("ingresa numero de patente para indicar la fila (s-para salir)");
}

// ejemplo 2 

let ingreseTarjeta;
for (let i=1;i<=2;i++) {
     ingreseTarjeta = prompt("Ingresar numero de tarjeta de credito ");
       if(ingreseTarjeta == "1234 1234 1234 1234"){
       alert ("el numero ingresado es valido")
       break;
       }else{
       alert ("su numero de tarjeta es incorrecto, restan "+ (2-i) +" intentos");
        }
    
}