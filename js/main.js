//1. Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor

let num1 = prompt ("Ingresa un numero, entre l y 100");
console.log(num1);
let num2 = prompt ("Ingresa otro numero, entre l y 100");
console.log(num2);
let num3 = prompt ("Ingresa otro numero, entre l y 100");
console.log(num3);
if ((num1>=1)&&(num1<=100)) {
} 
else if ((num1<1) || (num1>100)) {
    alert (num1+" No esta demtro de los parametros")
}
if ((num2>=1)&&(num2<=100)) {
} 
else if ((num2<1) || (num2>100)) {
    alert (num2+" No esta demtro de los parametros")
}
if ((num3>=1)&&(num3<=100)) {
} 
else if ((num3<1) || (num3>100)) {
    alert (num3+" No esta demtro de los parametros")
}
if ((num1>=num2)&&(num1>=num3)){
    alert (num1+" Es el numero mas grande")
}
else if ((num2>=num1)&&(num2>=num3)){
    alert (num2+" Es el numero mas grande")
}
else if ((num3>=num1)&&(num3>=num2)){
    alert (num3+" Es el numero mas grande")
}


//2. Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números


if ((num1<=num2)&&(num1<=num3)){
    alert (num1+" Es el numero mas pequeño")
}
else if ((num2<=num1)&&(num2<=num3)){
    alert (num2+" Es el numero mas pequeño")
}
else if ((num3<=num1)&&(num3<=num2)){
    alert (num3+" Es el numero mas pequeño")
}

//3. Realizar un algortimo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles



//4. Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
let num4 = prompt ("Ingresa un numero, entre l y 100");
console.log(num4);

if ((num4>=100)&&(num4<=200)) {
} 
else if ((num4<100) || (num4>200)) {
    alert (num4+" No esta demtro de los parametros")
}
if (num4%3){
    
}

//5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos


//6. Elabora un algoritmo para leer un número y determinar si es par o impar



//NO USAR EN PRODUCCION
// USO EXCLUSIVO DE PRUEBAS

//Mensaje de alerta OK

//alert ("Hola soy un mensaje");

//confirmacion / OK - CANCEL

//confirm ("¿Estas de acuerdo?");

//pregunta - cuadro de texto - ok

//prompt ("Cuál es tu nombre?","");



// let chilaquiles = confirm("¿Te gustan los chilaquiles verdes?");
//console.log(chilaquiles);


// Operadores de comparación
// == igual
// > mayor que
// >= mayor que
// < menor que
// <= menor o igual que
// != diferente 


// if (chilaquiles) {
 //   alert ("Felicidades !!!");
//} else if  (confirm("¿Y los chilaquiles rojos?")){
//    alert ("Muy bien!!!");
//} else { 
//    alert ("Deberias de probarlos");
// }

//if Termario
// (condicion)? verdadero:falso;
// let mensaje = (chilaquiles)?"felicidades !!!" : "Deberias de probarlos !!!"";

//let mensaje = (chilaquiles)?
  //                          "felicidades !!!":
    //                        (confirm("y los chilaquiles rojos?")) "muy bien !!!" :
      //                      "Deberias de probarlos !!!";
// alert (mensaje)

//let a = 7;
//let b = '7';
//console.log( a==b );
//console.log( a===b );
//console.log( a>b );
//console.log( a>=b );
//console.log( a<b );
//console.log( a<=b );
//console.log( a!=b );
//console.log( a!==b );

// operadores logicos
// AND - Y // &&
// OR - O // ||
// NOT - No // !
//console.clear ();

//a = 11;
//b = 11;
//c = 12;
//console.log( (a>b) && (a!=b) );

//console.log( (a>b) || (a!=b) );

//console.log(! (a>b)) ;

//console.log( (a>b) && (a!=b) && (a<c) );

//console.log( (a>b) || (a!=b) && (a<c) );

//console.log( ( (a>b) && (a!=b) ) || (a<c) );
