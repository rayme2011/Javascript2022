
// //funcion simple
// function saludar(){

//     document.write("Bienvenidos!!");
// }
// saludar();


// //funcion con parametos
// function sumar(a , b){

//     document.write(a+b);
// }
// sumar(5,5);


// //almacenar una funcion  en una variable
// var misuma=function(a,b,c){
//     document.write(a+b+c);
// }
// misuma(5,5,5);

// //funciones flechas

// var acceso =true
// var ingres =function (a){
//     return a
// }

// ingres(acceso)==true? document.write("correcto"): document.write("incorrecto")

// //funciones con flechas  sin parametros
// var acceso =false
// var ingreso = a=> a
// ingreso(acceso)==true? document.write("correcto"): document.write("incorrecto")

// // no pasamos parametros y retornamos una sola funcion
// var acceso =true
// var ingreso =()=> true
// ingreso(acceso)==true? document.write("correcto"): document.write("incorrecto")

// //  pasamos parametros y retornamos una sola funcion
// var ingresos =(a,b)=> document.write(`valores son ${a} y otro valor ${b}`)

// ingresos(15,10)



//ejerccios del curso

function saludar(){

   document.write("pruebas"); 
}

saludar();


function sumar(a,b){
    document.write(a + b);

}
sumar(5,2);


var color =(a,b) => (a,b)

document.write(7+90);



var saluda = () => "hola";

document.write(saluda()); 