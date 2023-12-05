//Ejercicio 1 Función contar el número de caracteres de una cadena de texto
const contarCaracteres = (texto) => texto.length;
console.log(contarCaracteres("Hola mundo"));

const contarCaracteres2 = (texto) => {
  let contar =
    typeof texto === "string"
      ? console.log(texto.length)
      : console.log("El dato ingresado no es un texto");
  return;
};
contarCaracteres2("Hola");

//Ejercicio 2 Funcion que devuelva el texto recortado según el número de caracteres
const recortarTexto = (texto, n) => console.log(texto.slice(0, n));
recortarTexto("Hola mundo", 6);

//Ejercicio 3 Función que cuando te den un String devuelva un Array de textos separados por cierto caracter
const textoArray = (texto) => console.log(texto.split(" "));
textoArray("Hola mundo");

//Ejercicio 4 Función que repita texto n veces
const repetirTexto = (texto, m) => console.log(texto.repeat(m));
repetirTexto("Hola mundo ", 2);

//Ejercicio 5
