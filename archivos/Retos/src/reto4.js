//break and continue
let k;
cuenta = 0;
for(k = 0; k <= 20; k++){
    if(k === 13){ // cuando llega al crece se sale pero este no se cuenta como numero impar
        break;
    }
    if(k % 2 === 0){
        continue;
    }
    cuenta ++ // se suma los numeros impares
}
console.log(`Hay ${cuenta} numeros impares`);