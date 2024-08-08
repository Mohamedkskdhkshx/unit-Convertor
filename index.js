let convBtn = document.getElementById("convert-btn");


const pV = document.getElementById("p-v")
const pL = document.getElementById("p-l")
const pM = document.getElementById("p-m")
function volumsto(inputValue){
    let lToGallon = inputValue * 0.264
    let gallonToL = inputValue / 0.264
    let res   = `${inputValue} liters = ${lToGallon.toFixed(2)} gallon | ${inputValue} gallon = ${gallonToL.toFixed(2)} liters  `
    pV.textContent = res
}
function lengthsto(inputValue){
    
    let mToFet = inputValue * 3.281
    let fetToM = inputValue / 3.281
    let res  = `${inputValue} meters = ${mToFet.toFixed(2)} feet | ${inputValue} feet = ${fetToM.toFixed(2)} meters  `
     pL.textContent = res

}
function massto(inputValue){
    let kgToPound = inputValue * 2.204
    let poundToKg = inputValue / 2.204
   let res = `${inputValue} kilograms = ${kgToPound.toFixed(2)} pound | ${inputValue} pounds = ${poundToKg.toFixed(2)} Kilograms  `
   pM.textContent = res
}



convBtn.addEventListener("click",function(){
    const inputValue = document.getElementById("inp-display").value;

    massto(inputValue)
    lengthsto(inputValue)
    volumsto(inputValue)
    console.log(inputValue)
  
})

