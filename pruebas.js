function checkOddOrEvenRegular(number) {
    if (number % 2 === 0) {
      console.log(`${number} es un número par.`);
    } else {
      console.log(`${number} es un número impar.`);
    }
  }
  
  // Ejemplo de uso:
  checkOddOrEvenRegular(5); // Output: 5 es un número impar.
  checkOddOrEvenRegular(8); // Output: 8 es un número par.

  

const checkOddOrEvenArrow = (number) => {
  if (number % 2 === 0) {
    console.log(`${number} es un número par.`);
  } else {
    console.log(`${number} es un número impar.`);
  }
};

// Ejemplo de uso:
checkOddOrEvenArrow(5); // Output: 5 es un número impar.
checkOddOrEvenArrow(8); // Output: 8 es un número par.