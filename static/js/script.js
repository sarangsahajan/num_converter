function initialize() {
  const defaultDecimal = 0;
  document.getElementById("decimalInput").value = defaultDecimal;
  convertFromDecimal();
}

function convertFromDecimal() {
  const decimalInput = parseFloat(document.getElementById("decimalInput").value);
  if (isNaN(decimalInput)) {
      return;
  }

  document.getElementById("binaryInput").value = decimalToBinary(decimalInput);
  document.getElementById("octalInput").value = decimalToOctal(decimalInput);
  document.getElementById("hexInput").value = decimalToHex(decimalInput);
}

function convertFromBinary() {
  const binaryInput = document.getElementById("binaryInput").value.replace(/\s+/g, '');
  const decimalNumber = binaryToDecimal(binaryInput);

  if (isNaN(decimalNumber)) {
      return;
  }

  document.getElementById("decimalInput").value = decimalNumber;
  document.getElementById("octalInput").value = decimalToOctal(decimalNumber);
  document.getElementById("hexInput").value = decimalToHex(decimalNumber);
}

function convertFromOctal() {
  const octalInput = document.getElementById("octalInput").value;
  const decimalNumber = octalToDecimal(octalInput);

  if (isNaN(decimalNumber)) {
      return;
  }

  document.getElementById("decimalInput").value = decimalNumber;
  document.getElementById("binaryInput").value = decimalToBinary(decimalNumber);
  document.getElementById("hexInput").value = decimalToHex(decimalNumber);
}

function convertFromHex() {
  const hexInput = document.getElementById("hexInput").value.toUpperCase();
  const decimalNumber = hexToDecimal(hexInput);

  if (isNaN(decimalNumber)) {
      return;
  }

  document.getElementById("decimalInput").value = decimalNumber;
  document.getElementById("binaryInput").value = decimalToBinary(decimalNumber);
  document.getElementById("octalInput").value = decimalToOctal(decimalNumber);
}

function decimalToBinary(decimal) {
  if (isNaN(decimal)) return '';

  const [integerPart, fractionalPart] = decimal.toString().split('.');
  let binaryInteger = parseInt(integerPart, 10).toString(2);

  let binaryFractional = '';
  let fraction = parseFloat(`0.${fractionalPart}`) || 0;
  while (fraction > 0 && binaryFractional.length < 16) {
      fraction *= 2;
      const bit = Math.floor(fraction);
      binaryFractional += bit.toString(2);
      fraction -= bit;
  }

  return binaryInteger + (binaryFractional ? '.' + binaryFractional : '');
}

function binaryToDecimal(binary) {
  const [integerPart, fractionalPart] = binary.split('.').map(part => part || '');
  const integerDecimal = parseInt(integerPart, 2) || 0;

  let fractionalDecimal = 0;
  if (fractionalPart) {
      for (let i = 0; i < fractionalPart.length; i++) {
          fractionalDecimal += parseInt(fractionalPart[i], 2) * Math.pow(2, -(i + 1));
      }
  }

  return integerDecimal + fractionalDecimal;
}

function decimalToOctal(decimal) {
  if (isNaN(decimal)) return '';

  const [integerPart, fractionalPart] = decimal.toString().split('.');
  let octalInteger = parseInt(integerPart, 10).toString(8);

  let octalFractional = '';
  let fraction = parseFloat(`0.${fractionalPart}`) || 0;
  while (fraction > 0 && octalFractional.length < 16) {
      fraction *= 8;
      const digit = Math.floor(fraction);
      octalFractional += digit.toString(8);
      fraction -= digit;
  }

  return octalInteger + (octalFractional ? '.' + octalFractional : '');
}

function octalToDecimal(octal) {
  const [integerPart, fractionalPart] = octal.split('.').map(part => part || '');
  const integerDecimal = parseInt(integerPart, 8) || 0;

  let fractionalDecimal = 0;
  if (fractionalPart) {
      for (let i = 0; i < fractionalPart.length; i++) {
          fractionalDecimal += parseInt(fractionalPart[i], 8) * Math.pow(8, -(i + 1));
      }
  }

  return integerDecimal + fractionalDecimal;
}

function decimalToHex(decimal) {
  if (isNaN(decimal)) return '';

  const [integerPart, fractionalPart] = decimal.toString().split('.');
  let hexInteger = parseInt(integerPart, 10).toString(16).toUpperCase();

  let hexFractional = '';
  let fraction = parseFloat(`0.${fractionalPart}`) || 0;
  while (fraction > 0 && hexFractional.length < 16) {
      fraction *= 16;
      const digit = Math.floor(fraction);
      hexFractional += digit.toString(16).toUpperCase();
      fraction -= digit;
  }

  return hexInteger + (hexFractional ? '.' + hexFractional : '');
}

function hexToDecimal(hex) {
  const [integerPart, fractionalPart] = hex.split('.').map(part => part || '');
  const integerDecimal = parseInt(integerPart, 16) || 0;

  let fractionalDecimal = 0;
  if (fractionalPart) {
      for (let i = 0; i < fractionalPart.length; i++) {
          fractionalDecimal += parseInt(fractionalPart[i], 16) * Math.pow(16, -(i + 1));
      }
  }

  return integerDecimal + fractionalDecimal;
}

// Initialize values on page load
window.onload = initialize;
