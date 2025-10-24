class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) {
      return "Error: no se puede dividir por cero";
    }
    return a / b;
  }

  potencia(base, exponente) {
    return Math.pow(base, exponente);
  }

  raizCuadrada(numero) {
    return Math.sqrt(numero);
  }

  factorial(n) {
    if (n < 0) {
      return "Error: no se puede calcular el factorial de un número negativo";
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }

  resto(a, b) {
    return a % b;
  }

  logaritmoNatural(n) {
    return Math.log(n);
  }

  numeroMaximoArreglo(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    return Math.max(...arr);
  }

  function porcentaje(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return (a / b) * 100;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Calculadora;
}

const calc = new Calculadora();

console.log('=== Calculadora Simple ===');
console.log('Ejemplo de uso:');
console.log('calc.sumar(5, 3):', calc.sumar(5, 3));
console.log('calc.numeroMaximoArreglo([1, 9, 3, 5]):', calc.numeroMaximoArreglo([1, 9, 3, 5]));
console.log('\nFunciones disponibles:');
console.log('- calc.sumar(a, b)');
console.log('- calc.restar(a, b)');
console.log('- calc.multiplicar(a, b)');
console.log('- calc.dividir(a, b)');
console.log('- calc.potencia(base, exponente)');
console.log('- calc.raizCuadrada(numero)');
console.log('- calc.factorial(n)');
console.log('- calc.resto(a, b)');
console.log('- calc.logaritmoNatural(n)');
console.log('- calc.numeroMaximoArreglo(arreglo)');
console.log('- calc.porcentaje(a, b)');