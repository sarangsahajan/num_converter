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
  const integerPart = Math.floor(decimal);
  const fractionalPart = decimal - integerPart;
  let binaryInteger = integerPart.toString(2);

  let binaryFractional = '';
  let fraction = fractionalPart;
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
  return decimal.toString(8);
}

function octalToDecimal(octal) {
  return parseFloat(parseInt(octal, 8).toString());
}

function decimalToHex(decimal) {
  return decimal.toString(16).toUpperCase();
}

function hexToDecimal(hex) {
  return parseFloat(parseInt(hex, 16).toString());
}

// Initialize values on page load
window.onload = initialize;
