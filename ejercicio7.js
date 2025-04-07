// Al recibir dos numeros por argumento, devuelve el mas alto

function greaterNumber(numberOne , numberTwo) {
    if(numberOne > numberTwo){
      return numberOne;
    }else{
      return numberTwo;
    }
}
  console.log(greaterNumber(25, 654));