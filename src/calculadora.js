class Calculadora {
  constructor() {
    this.memoria = 0;
  }

  getMemoria() {
    return this.memoria;
  }

  sumar(a, b) {
    const resultado = a + b;
    this.memoria = resultado;
    return resultado;
  }

  restar(a, b) {
    const resultado = a - b;
    this.memoria = resultado;
    return resultado;
  }

  multiplicar(a, b) {
    const resultado = a * b;
    this.memoria = resultado;
    return resultado;
  }

  dividir(a, b) {
    if (b === 0) {
      return "Error: no se puede dividir por cero";
    }
    const resultado = a / b;
    this.memoria = resultado;
    return resultado;
  }

  potencia(base, exponente) {
    const resultado = Math.pow(base, exponente);
    this.memoria = resultado;
    return resultado;
  }

  raizCuadrada(numero) {
    const resultado = Math.sqrt(numero);
    this.memoria = resultado;
    return resultado;
  }

  factorial(n) {
    if (n < 0) {
      return "Error: no se puede calcular el factorial de un número negativo";
    }
    if (n === 0 || n === 1) {
      this.memoria = 1;
      return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    this.memoria = resultado;
    return resultado;
  }

  resto(a, b) {
    const resultado = a % b;
    this.memoria = resultado;
    return resultado;
  }

  logaritmoNatural(n) {
    const resultado = Math.log(n);
    this.memoria = resultado;
    return resultado;
  }

  numeroMaximoArreglo(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    const resultado = Math.max(...arr);
    this.memoria = resultado;
    return resultado;
  }

  promedio(arr) {
    if (arr.length === 0){
      return "Error"
    }
    let suma = 0;
    let cant = arr.length
     arr.map((numero) => suma = suma+numero)

     const resultado = suma/cant
     this.memoria = resultado;
     return resultado
  }


  porcentaje(a, b) { // 4. Sintaxis corregida
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    const resultado = (a / b) * 100;
    this.memoria = resultado;
    return resultado;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Calculadora;
}

const calc = new Calculadora();

console.log('=== Calculadora Simple ===');
console.log('Ejemplo de uso:');
console.log('calc.sumar(5, 3):', calc.sumar(5, 3));
console.log('Valor en memoria:', calc.getMemoria()); // Muestra 8
console.log('calc.multiplicar(calc.getMemoria(), 2):', calc.multiplicar(calc.getMemoria(), 2)); // Usa 8, da 16
console.log('Valor en memoria:', calc.getMemoria()); // Muestra 16
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
console.log('- calc.promedio(arreglo)')
console.log('- calc.porcentaje(a, b)');
console.log('- calc.getMemoria()');