let billAmountValue = 0;
let tipDisplay = document.getElementById("tipPerPerson");
let billAmount = document.getElementById("bill-amount");
let percentage1 = document.getElementById("percentage1");
let percentage2 = document.getElementById("percentage2");
let percentage3 = document.getElementById("percentage3");
let percentage4 = document.getElementById("percentage4");
let percentage5 = document.getElementById("percentage5");
let percentage6 = document.getElementById("percentage6");
let totalPerPerson = document.getElementById("totalPerPerson");
let redError = document.getElementById("red");
let resetButton = document.getElementById("reset");
let percentage6Value = 0;
let numberOfPeople = document.getElementById("peeps");
let peepsValue = 0;
let tipPerPerson = 0;
let newAmount = 0;
let value1 = 0;




let total = 0;




percentage1.addEventListener("click", function firstPart () {
value1 = 0.05; // 5%
newAmount = value1 * billAmountValue;
tipDisplay.innerHTML = `$${newAmount.toFixed(2)}`;
if(isNaN(peepsValue) || peepsValue === 0){
peepsValue = 1;
}
total = (billAmountValue + newAmount)/peepsValue;
totalPerPerson.innerHTML = `$${total.toFixed(2)}`;






if(isNaN(peepsValue) || peepsValue === 0){
peepsValue = 1;
}
tipPerPerson = newAmount / peepsValue;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
if(tipPerPerson === Infinity){
tipPerPerson = newAmount;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
}

percentage1.style.scale = "1.1";
percentage2.style.scale = "unset";
percentage3.style.scale = "unset";
percentage4.style.scale = "unset";
percentage5.style.scale = "unset";

percentage1.style.backgroundColor = "hsl(172, 67%, 45%)";
percentage2.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage3.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage4.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage5.style.backgroundColor = "hsl(183, 100%, 15%)";


});




percentage2.addEventListener("click", function () {
value1 = 0.10; // 5%
newAmount = value1 * billAmountValue;
tipDisplay.innerHTML = `$${newAmount.toFixed(2)}`;
total = (billAmountValue + newAmount)/peepsValue;
totalPerPerson.innerHTML = `$${total.toFixed(2)}`;




if(isNaN(peepsValue) || peepsValue === 0){
peepsValue = 0;
}
tipPerPerson = newAmount / peepsValue;
total = billAmountValue + newAmount;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
if(tipPerPerson === Infinity){
tipPerPerson = newAmount;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
}

percentage1.style.scale = "unset";
percentage2.style.scale = "1.1";
percentage3.style.scale = "unset";
percentage4.style.scale = "unset";
percentage5.style.scale = "unset";

percentage1.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage2.style.backgroundColor = "hsl(172, 67%, 45%)";
percentage3.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage4.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage5.style.backgroundColor = "hsl(183, 100%, 15%)";

});




percentage3.addEventListener("click", function () {
value1 = 0.15; // 5%
newAmount = value1 * billAmountValue;
tipDisplay.innerHTML = `$${newAmount.toFixed(2)}`;
if(isNaN(peepsValue) || peepsValue === 0){
peepsValue = 1;
}
total = (billAmountValue + newAmount)/peepsValue;
totalPerPerson.innerHTML = `$${total.toFixed(2)}`;






if(isNaN(peepsValue) || peepsValue === 0){
peepsValue = 1;
}
tipPerPerson = newAmount / peepsValue;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
if(tipPerPerson === Infinity){
tipPerPerson = newAmount;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
}

percentage1.style.scale = "unset";
percentage2.style.scale = "unset";
percentage3.style.scale = "1.1";
percentage4.style.scale = "unset";
percentage5.style.scale = "unset";

percentage1.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage2.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage3.style.backgroundColor = "hsl(172, 67%, 45%)";
percentage4.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage5.style.backgroundColor = "hsl(183, 100%, 15%)";


});




percentage4.addEventListener("click", function () {
value1 = 0.25; // 5%
newAmount = value1 * billAmountValue;
tipDisplay.innerHTML = `$${newAmount.toFixed(2)}`;
if(isNaN(peepsValue) || peepsValue === 0){
peepsValue = 1;
}
total = (billAmountValue + newAmount)/peepsValue;
totalPerPerson.innerHTML = `$${total.toFixed(2)}`;






if(isNaN(peepsValue) || peepsValue === 0){
peepsValue = 1;
}
tipPerPerson = newAmount / peepsValue;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
if(tipPerPerson === Infinity){
tipPerPerson = newAmount;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
}

percentage1.style.scale = "unset";
percentage2.style.scale = "unset";
percentage3.style.scale = "unset";
percentage4.style.scale = "1.1";
percentage5.style.scale = "unset";

percentage1.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage2.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage3.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage4.style.backgroundColor = "hsl(172, 67%, 45%)";
percentage5.style.backgroundColor = "hsl(183, 100%, 15%)";


});




percentage5.addEventListener("click", function () {
value1 = 0.50; // 5%
newAmount = value1 * billAmountValue;
tipDisplay.innerHTML = `$${newAmount.toFixed(2)}`;
if(isNaN(peepsValue) || peepsValue === 0){
peepsValue = 1;
}
total = (billAmountValue + newAmount)/peepsValue;
totalPerPerson.innerHTML = `$${total.toFixed(2)}`;






if(isNaN(peepsValue) || peepsValue === 0){
peepsValue = 1;
}
tipPerPerson = newAmount / peepsValue;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
if(tipPerPerson === Infinity){
tipPerPerson = newAmount;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
}

percentage1.style.scale = "unset";
percentage2.style.scale = "unset";
percentage3.style.scale = "unset";
percentage4.style.scale = "unset";
percentage5.style.scale = "1.1";

percentage1.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage2.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage3.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage4.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage5.style.backgroundColor = "hsl(172, 67%, 45%)";

});




percentage6.addEventListener("input", function () {
percentage6Value = parseFloat(percentage6.value);
if(isNaN(percentage6Value) || percentage6Value === 0){
percentage6Value = 0;
}
value1 = percentage6Value / 100;
newAmount = value1 * billAmountValue;
tipDisplay.innerHTML = `$${newAmount.toFixed(2)}`;
if(isNaN(peepsValue) || peepsValue === 0){
peepsValue = 1;
}
total = (billAmountValue + newAmount)/peepsValue;
totalPerPerson.innerHTML = `$${total.toFixed(2)}`;






if(isNaN(peepsValue) || peepsValue === 0){
peepsValue = 1;
}
tipPerPerson = newAmount / peepsValue;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
if(tipPerPerson === Infinity){
tipPerPerson = newAmount;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
}


});




numberOfPeople.addEventListener("input", function () {
peepsValue = parseFloat(numberOfPeople.value);
//let tipPerPerson = parseFloat(tipDisplay.innerHTML.replace('$', '')) / peepsValue;
if(isNaN(peepsValue) || peepsValue === 0){
peepsValue = 1;
numberOfPeople.style.borderColor = "hsl(172, 67%, 45%)";
redError.style.display = "none";
}
console.log(peepsValue);
tipPerPerson = newAmount / peepsValue;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
if(tipPerPerson === Infinity){
tipPerPerson = newAmount;
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
}

numberOfPeople.addEventListener("keyup",function(){
  if (event.key === "0" || event.keyCode === 48) {
    // Prevent the default behavior (e.g., inserting "0" into the input)
    numberOfPeople.style.borderColor = "red";
    redError.style.display = "block";
  }
});




dividedTotal = total / peepsValue;
totalPerPerson.innerHTML = `$${dividedTotal.toFixed(2)}`;
if(dividedTotal === Infinity){
dividedTotal = total;
totalPerPerson.innerHTML = `$${total.toFixed(2)}`;
}
});


billAmount.addEventListener("input", function () {
billAmountValue = parseFloat(billAmount.value);
newAmount = value1 * billAmountValue;
if(isNaN(peepsValue) || peepsValue === 0){
peepsValue = 1;
}

tipPerPerson = newAmount / peepsValue;
total = (billAmountValue + newAmount) / peepsValue;
if(isNaN(tipPerPerson) || tipPerPerson === Infinity){
tipPerPerson = 0;
}
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
totalPerPerson.innerHTML = `$${total.toFixed(2)}`;


if(isNaN(billAmountValue)){
billAmountValue = 0;
}
});

resetButton.addEventListener("click",function(){
  peepsValue = 0;
  billAmount.value = "";
  numberOfPeople.value = "";
  totalPerPerson.innerHTML = "$0.00";
  tipDisplay.innerHTML = `$0.00`;
  percentage1.style.scale = "unset";
  percentage2.style.scale = "unset";
  percentage3.style.scale = "unset";
  percentage4.style.scale = "unset";
  percentage5.style.scale = "unset";
  value1 = 0;
  total = 0;
  billAmountValue = 0;
  peepsValue = 1;
  redError.style.display = "none";
  numberOfPeople.style.borderColor = "hsl(172, 67%, 45%)";


percentage1.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage2.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage3.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage4.style.backgroundColor = "hsl(183, 100%, 15%)";
percentage5.style.backgroundColor = "hsl(183, 100%, 15%)";
})


















































/*numberOfPeople.addEventListener("input", function () {
let peepsValue = parseFloat(numberOfPeople.value);
let tipPerPerson = parseFloat(tipDisplay.innerHTML.replace('$', '')) / peepsValue;




if (isNaN(peepsValue) || peepsValue.toString().trim() === "0") {
peepsValue = "0";
tipDisplay.innerHTML = `$${newAmount.toFixed(2)}`;




} else {
tipDisplay.innerHTML = `$${tipPerPerson.toFixed(2)}`;
}




console.log(`This is People ${peepsValue}`);
console.log(`This is the tip per person ${tipPerPerson}`);
}); */









