function decrementa(num) {
    for (let i = num; i >= 0; i--) {
      if (i % 2 === 0) {
        console.log(i);
    }
  }
}

decrementa(10);

function isPalindrome(palavra) {
    if( palavra === palavra.split('').reverse().join('')) {
        console.log('É um palíndromo');
    }
}

function calculateAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum / array.length);
}
