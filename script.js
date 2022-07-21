
for(let i=1;i<=3;i++){
    let Nombre=prompt("Ingrese su nombre");
    let Apellido=prompt("ingrese su apellido");
    let Edad=prompt("Ingrese su edad");
    let Estudio=prompt("Que está estudiando?");

    if((Nombre !="")&&(Apellido !="")&&(Edad !="")&&(Estudio !="")){
        console.log("Su nombre es "+Nombre+" "+Apellido+","+"tiene "+Edad+" años y estudia "+Estudio);
        break;
    }else{
        let intentosRestantes=3-i;
        if (intentosRestantes<=0){
            alert("No completó todos los campos, no le quedan más intentos.");
        }else {
            if(intentosRestantes<=1){
                alert("Verifique haber llenado todos los campos, le queda "+intentosRestantes+" intento.");
            }else{
            if(intentosRestantes<=2){
                alert("Verifique haber llenado todos los campos, le quedan "+intentosRestantes+" intentos.")
            }    

            }
        }
    }
}

