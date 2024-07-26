const calculateBtn = document.getElementById("calculateBtn");
const resultP = document.getElementById("resultP");
const reset = document.getElementById("reset");

calculateBtn.onclick = function(){
    let distanceKm = document.getElementById("distanceKm").value;
    let fuelUsage = document.getElementById("fuelUsage").value;
    let fuelPrice = document.getElementById("fuelPrice").value;
    let numberOfPeople = document.getElementById("numberOfPeople").value;

    distanceKm = parseFloat(distanceKm);
    fuelUsage = parseFloat(fuelUsage);
    fuelPrice = parseFloat(fuelPrice);
    numberOfPeople = parseInt(numberOfPeople);

    if(distanceKm !== "" || fuelUsage !== "" || fuelPrice !== "" || numberOfPeople !== ""){
        if(!(distanceKm < 0 || fuelUsage < 0 || fuelPrice < 0 || numberOfPeople < 1)){
            if(numberOfPeople == 1){
                let result = (distanceKm / 100 * fuelUsage * fuelPrice).toFixed(2);
                resultP.innerText = `Trip cost: ${result}zł`;    
            }
            else {
                let result = (distanceKm / 100 * fuelUsage * fuelPrice).toFixed(2);
                let resultPerPerson = ((distanceKm / 100 * fuelUsage * fuelPrice)/numberOfPeople).toFixed(2);
                resultP.innerText = `Trip cost: ${result}zł \n \n Per person: ${resultPerPerson}zł`;
            }
        } 
        else {
            resultP.innerText = "Enter valid data";
        }
    }
    else {
        resultP.innerText = "Enter all data";
    }
}

reset.onclick = function(){
    resultP.textContent = "";
}