const form = document.getElementById("converter-form")
const areaInput = document.getElementById("area");
const fromSelect = document.getElementById("from-unit");
const toSelect = document.getElementById("to-unit");
const result = document.getElementById("result");

const squareMetresPerUnit = {
  sqm: 1,
  acres: 4046.8564224,
  hectares: 10000
};

const unitSymbols = {
  sqm: "m²",
  acres: "ac",
  hectares: "ha"
};


form.addEventListener("submit", function(event){

    event.preventDefault();

    const area = areaInput.valueAsNumber;
    const fromUnit = fromSelect.value;
    const toUnit = toSelect.value;

    if(!Number.isFinite(area) || area <0){
        result.textContent = "Please enter a valid area value of zero or more";
        return;
    }

    const squareMetres = area * squareMetresPerUnit[fromUnit];
    const convertedArea = squareMetres/ squareMetresPerUnit[toUnit];


    result.textContent = `${area} ${unitSymbols[fromUnit]} ≈ ${convertedArea.toFixed(4)} ${unitSymbols[toUnit]}`;

})
