// Function to initialize the default values
function initialize() {
  const defaultDecimal = 0;
  document.getElementById("decimalInput").value = defaultDecimal;
  convertFromDecimal();
}

// Function to convert from decimal input
function convertFromDecimal() {
  const decimalInput = document.getElementById("decimalInput").value;
  const decimalNumber = parseInt(decimalInput);

  if (isNaN(decimalNumber)) {
    return;
  }

  document.getElementById("binaryInput").value = formatBinary(
    decimalNumber.toString(2)
  );
  document.getElementById("octalInput").value = decimalNumber.toString(8);
  document.getElementById("hexInput").value = decimalNumber
    .toString(16)
    .toUpperCase();
}

// Function to convert from binary input
function convertFromBinary() {
  const binaryInput = document
    .getElementById("binaryInput")
    .value.replace(/\s+/g, "");
  const decimalNumber = parseInt(binaryInput, 2);

  if (isNaN(decimalNumber)) {
    return;
  }

  document.getElementById("decimalInput").value = decimalNumber;
  document.getElementById("octalInput").value = decimalNumber.toString(8);
  document.getElementById("hexInput").value = decimalNumber
    .toString(16)
    .toUpperCase();
}

// Function to convert from octal input
function convertFromOctal() {
  const octalInput = document.getElementById("octalInput").value;
  const decimalNumber = parseInt(octalInput, 8);

  if (isNaN(decimalNumber)) {
    return;
  }

  document.getElementById("decimalInput").value = decimalNumber;
  document.getElementById("binaryInput").value = formatBinary(
    decimalNumber.toString(2)
  );
  document.getElementById("hexInput").value = decimalNumber
    .toString(16)
    .toUpperCase();
}

// Function to convert from hexadecimal input
function convertFromHex() {
  const hexInput = document.getElementById("hexInput").value.toUpperCase();
  const decimalNumber = parseInt(hexInput, 16);

  if (isNaN(decimalNumber)) {
    return;
  }

  document.getElementById("decimalInput").value = decimalNumber;
  document.getElementById("binaryInput").value = formatBinary(
    decimalNumber.toString(2)
  );
  document.getElementById("octalInput").value = decimalNumber.toString(8);
}

// Function to format binary with spaces every 4 bits
function formatBinary(binaryString) {
  return binaryString
    .padStart(Math.ceil(binaryString.length / 4) * 4, "0")
    .match(/.{1,4}/g)
    .join(" ");
}

// Initialize values on page load
window.onload = initialize;
