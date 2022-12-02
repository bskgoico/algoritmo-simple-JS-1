//Crea un script en JS que le solicite al usuario ingresar mínimo 1(un) dato.
//Luego, con JavaScrip, realiza operaciones matemáticas o de concatenación sobre las entradas
//teniendo en cuenta el tipo de dato. Al finalizar mostrar el resultado con alert() o console.log()

//Calculador de año de nacimiento

let nombreApellido = prompt('Ingrese su nombre y apellido');
let edad = Number(prompt('¿Cuantos años tiene?'));
const ANIOACTUAL = Number(2022);

let resultado = (ANIOACTUAL - edad);

alert('Perfecto ' + nombreApellido + ',' + ' Usted nació en el año ' + resultado); 