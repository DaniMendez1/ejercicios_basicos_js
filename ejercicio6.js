
//1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
for(let i = 0; i <= 9; i++){
    console.log(i);
};

//1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo, cuando el resto del numero dividido entre 2 sea 0.
for(let i = 0; i <=9; i++){
    if((i % 2) == 0){
        console.log(i);
    };
};

//1.3 Crea un bucle para conseguir dormir contando ovejas. Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
//Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle y cambia el mensaje en la décima vuelta a '¡Dormido!'.
let i = 0;
let texto;

while(i <= 9){
    i++;
    //Para el plural cuando cuentes mas de una Oveja se cambie a Ovejas
    if ( i === 1){
        texto = "Oveja";
    }else{
        texto = "Ovejas";
    }
    
    console.log(i + " " + texto +"." + " Intentando dormir... 🐑");
    if(i >= 10){
        console.log("Dormido!!");
    }
    //console.log(i + " Dormido!!"); -> Seria mejor esta opcion? Poner el console.log fuera del bucle y ahorrarse hacer el if.
};

