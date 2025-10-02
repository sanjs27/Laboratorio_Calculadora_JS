
let num1;
let num2;
let operacion;


function realizarOperacion(num1, num2, operacion) {
  if (operacion === "suma") {
    return num1 + num2;
  } else if (operacion === "resta") {
    return num1 - num2;
  } else if (operacion === "multiplicacion") {
    return num1 * num2;
  } else if (operacion === "division") {
    if (num2 === 0) {
      return "Error: no se puede dividir entre 0";
    }
    return num1 / num2;
  } else {
    return "Error: operación no válida";
  }
}


while (true) {
  
  operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar:");

  if (operacion === "salir") {
    alert("Gracias por usar la calculadora. ¡Hasta pronto!");
    break; 
  }


  if (["suma", "resta", "multiplicacion", "division"].includes(operacion)) {
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));

    
    let resultado = realizarOperacion(num1, num2, operacion);
    alert(`El resultado de la ${operacion} es: ${resultado}`);
  } else {
    alert("Operación no válida. Intente de nuevo.");
  }
}
