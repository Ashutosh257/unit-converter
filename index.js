const inputEle = document.getElementById("input-element");
const conEle = document.getElementById("con-btn");
const meterFeetEle = document.getElementById("meter-feet");
const litersGallonsEle = document.getElementById("liters-gallons");
const kiloPoundsEle = document.getElementById("kilo-pounds");

let valuee;

conEle.addEventListener("click", function () {
    console.log("convert clicked!")
  valuee = inputEle.value;

  renderResult(valuee);
});

function convertIntoMeterAndFeet() {
  let value = Number(valuee);

  let intoFeet = value * 3.281;

  let intoMeters = value / 3.281;

  let baseStr = `${value} meters = ${intoFeet.toFixed(
    3
  )} feet | ${value} feet = ${intoMeters.toFixed(3)} meters`;

//   console.log(baseStr);

  meterFeetEle.textContent = baseStr;
}

function convertIntoLitersAndGallons(valuee) {
  let value = Number(valuee);

  let intoLiters = value * 0.264;

  let intoGallons = value / 0.264;

  let baseStr = `${value} liters = ${intoLiters.toFixed(
    3
  )} gallons | ${value} gallons = ${intoGallons.toFixed(3)} liters`;

//   console.log(baseStr);

  litersGallonsEle.textContent = baseStr;
}

function convertIntoKilogramsandPounds(valuee) {
  let value = Number(valuee);

  let intoPounds = value * 2.204;

  let intoKilos = value / 2.204;

  let baseStr = `${value} kilos = ${intoPounds.toFixed(
    3
  )} pounds | ${value} pounds = ${intoKilos.toFixed(3)} Kilos`;

  // console.log(baseStr)

  kiloPoundsEle.textContent = baseStr;
}

function renderResult(valuee) {
  convertIntoMeterAndFeet(valuee);
  convertIntoLitersAndGallons(valuee);
  convertIntoKilogramsandPounds(valuee);
}
