# Ejercicios de Algoritmos implementados en Javascrip 
implementacion de los ejercicios de algoritmos con js
## Se integran los siguientes algoritmos resueltos 

1. Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor

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

2. Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números

if ((num1<=num2)&&(num1<=num3)){
    alert (num1+" Es el numero mas pequeño")
}
else if ((num2<=num1)&&(num2<=num3)){
    alert (num2+" Es el numero mas pequeño")
}
else if ((num3<=num1)&&(num3<=num2)){
    alert (num3+" Es el numero mas pequeño")
}

3. Realizar un algortimo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles


4. Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

let num4 = prompt ("Ingresa un numero, entre l00 y 200");
console.log(num4);

if ((num4>=100)&&(num4<=200)) {
} 
else if ((num4<100) || (num4>200)) {
    alert (num4+" No esta demtro de los parametros");
}
if (num4%3==0){
    alert (num4+ " Es numero multiplo de 3");
} 
else {
    alert (num4+ " No es multiplo de 3");
}

5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

let num5 = parseInt(prompt ("Ingresa un numero"));
console.log(num5);
let num6 = parseInt (prompt ("Ingresa otro numero"));
console.log(num6);
let num7 = parseInt (prompt ("Ingresa otro numero"));
console.log(num7);

if (num5+num6==num7){
    alert (num7+" Es la suma de " +num5 +"+"+num6);
}
else if (num6+num7==num5){
    alert (num8+" Es la suma de " +num6 +"+"+num7);
}
else if (num5+num7==num6){
    alert (num6+" Es la suma de " +num7+"+"+num6);
}
else {
    alert ("Ninguno es la suma de los otros dos números");
}

6. Elabora un algoritmo para leer un número y determinar si es par o impar

let num8 = prompt ("Ingresa un numero");
console.log(num8);

if (num8%2==0){
    alert (num8+ " Es numero par");
} 
else {
    alert (num8+ " No es par");
}
:wq
:wq

