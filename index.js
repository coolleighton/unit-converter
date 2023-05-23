const input = document.getElementById("num-input") 
const button = document.getElementById("convert") 
const lengthP = document.getElementById("length") 
const volumeP = document.getElementById("volume") 
const massP = document.getElementById("mass") 




button.addEventListener("click", function converter() {
    let inputValue = input.value
    let meterToFeet = inputValue * 3.28084
    let feetToMeter = inputValue * 0.3048
    let litreToGallon = inputValue * 0.264172
    let gallonToMeter = inputValue * 4.54609
    let kiloToPound = inputValue * 2.20462
    let poundToKilo = inputValue * 0.453592
    
    lengthP.innerHTML = `${inputValue} meters = ${meterToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeter.toFixed(3)} meters`

    volumeP.innerHTML = `${inputValue} litres = ${litreToGallon.toFixed(3)} gallons | ${inputValue} gallons = ${gallonToMeter.toFixed(3)} litres`

    massP.innerHTML = `${inputValue} kilograms = ${kiloToPound.toFixed(3)} pounds | ${inputValue} pounds = ${poundToKilo.toFixed(3)} kilograms`

} );

