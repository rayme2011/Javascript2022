var usuario="carlos"
var objeto3={
    nombre3 : "codigos3",
    apellidos3 : "codigos34"
}


var objetos ={ nombre:"luis",
apellidos: "raymne",
edad:"35",
texts : `el usuario general es ${usuario}`,
fecha : new Date(),
objeto4 :objeto3,
mifunciones: (a,b) => a+b,
objetos2:{
 nombre2:"diana suarez",
 apellidos2:"codigos"
}
}
console.log(objetos.objetos2.nombre2)
console.log(objetos.objeto4)

//desestructuracion de objetos
var {apellidos} = objetos
console.log(apellidos)

console.log(objetos.texts)

var otrafunciones=(texts , {objeto4})  => {
console.log(texts)
console.log(objeto4.nombre3)
}