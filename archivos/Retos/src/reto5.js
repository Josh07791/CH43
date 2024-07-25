let numer;
let limite = 50;


for(numer = 1; numer <= limite; numer++){
    let auxiliar = 1;
    let contador = 0;
    while(auxiliar <= numer){
        if(numer % auxiliar === 0){
            contador++;
        }
        auxiliar++;
    }
    if(contador === 2){
        console.log(numer);
    }

}


