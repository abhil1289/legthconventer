function updateFields() {
    var conversionType = document.getElementById("conversionType").value;
    var heading = document.getElementById("heading");
    var inputValue = document.getElementById("inputValue");
    var measurementType = document.getElementById("measurementType");
    var measurementTypeResult = document.getElementById("measurementTypeResult");
             document.getElementById("heading").innerHTML = conversionType + "C0nventer"
    // Update heading
    // heading.textContent = conversionType.charAt(0).toUpperCase() + conversionType.slice(1) + " Converter";

    // Update placeholder of input field and options of measurement dropdown
    switch (conversionType) {
        case "weight":
            inputValue.placeholder = "Enter Weight";
            measurementType.innerHTML = '<option value="grams">Grams</option>' +
                                        '<option value="kilograms">Kilograms</option>' +
                                        '<option value="pounds">Pounds</option>' +
                                        '<option value="ounces">Ounces</option>';
            break;
        case "length":
            inputValue.placeholder = "Enter Length";
            measurementType.innerHTML = '<option value="meters">Meters</option>' +
                                        '<option value="kilometers">Kilometers</option>' +
                                        '<option value="inches">Inches</option>' +
                                        '<option value="feet">Feet</option>';
            break;
        case "area":
            inputValue.placeholder = "Enter Area";
            measurementType.innerHTML = '<option value="squareMeters">Square Meters</option>' +
                                        '<option value="squareKilometers">Square Kilometers</option>' +
                                        '<option value="squareInches">Square Inches</option>' +
                                        '<option value="squareFeet">Square Feet</option>';
            break;
        default:
            inputValue.placeholder = " enter erher";
            break;
    }

    // Update options of the result measurement dropdown
    measurementTypeResult.innerHTML = measurementType.innerHTML;
}

function convert() {
    // Clear the result field before performing another conversion
    document.getElementById("result").value = '';

    var conversionType = document.getElementById("conversionType").value;
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var measurementType = document.getElementById("measurementType").value;
    var measurementTypeResult = document.getElementById("measurementTypeResult").value;
    var resultField = document.getElementById("result");

    var result;

    switch (conversionType) {
        case "weight":
            result = convertWeight(inputValue, measurementType, measurementTypeResult);
            break;
        case "length":
            result = convertLength(inputValue, measurementType, measurementTypeResult);
            break;
        case "area":
            result = convertArea(inputValue, measurementType, measurementTypeResult);
            break;
        default:
            result = "Invalid conversion type";
            break;
    }

    // Display the result in the result field
    resultField.value = "Result: " + result;
}

function convertWeight(value, fromType, toType) {
    var grams;
    // Convert the input value to grams
    switch (fromType) {
        case "grams":
            grams = value;
            break;
        case "kilograms":
            grams = value * 1000;
            break;
        case "pounds":
            grams = value / 0.00220462;
            break;
        case "ounces":
            grams = value / 0.035274;
            break;
        default:
            return "Invalid measurement type";
    }
    
    // Convert grams to the desired output type
    switch (toType) {
        case "grams":
            return grams;
        case "kilograms":
            return grams / 1000;
        case "pounds":
            return grams * 0.00220462;
        case "ounces":
            return grams * 0.035274;
        default:
            return "Invalid measurement type";
    }
}

function convertLength(value, fromType, toType) {
    var meters;
    // Convert the input value to meters
    switch (fromType) {
        case "meters":
            meters = value;
            break;
        case "kilometers":
            meters = value * 1000;
            break;
        case "inches":
            meters = value * 0.0254;
            break;
        case "feet":
            meters = value * 0.3048;
            break;
        default:
            return "Invalid measurement type";
    }
    
    // Convert meters to the desired output type
    switch (toType) {
        case "meters":
            return meters;
        case "kilometers":
            return meters / 1000;
        case "inches":
            return meters / 0.0254;
        case "feet":
            return meters / 0.3048;
        default:
            return "Invalid measurement type";
    }
}


function convertArea(value, fromType, toType) {
    var squareMeters;
    // Convert the input value to square meters
    switch (fromType) {
        case "squareMeters":
            squareMeters = value;
            break;
        case "squareKilometers":
            squareMeters = value * 1000000;
            break;
        case "squareInches":
            squareMeters = value * 0.00064516;
            break;
        case "squareFeet":
            squareMeters = value * 0.092903;
            break;
        default:
            return "Invalid measurement type";
    }
    
    // Convert square meters to the desired output type
    switch (toType) {
        case "squareMeters":
            return squareMeters;
        case "squareKilometers":
            return squareMeters / 1000000;
        case "squareInches":
            return squareMeters / 0.00064516;
        case "squareFeet":
            return squareMeters / 0.092903;
        default:
            return "Invalid measurement type";
    }
}