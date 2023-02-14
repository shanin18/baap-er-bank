function inputFieldValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldToNumber = parseFloat(inputFieldValue);
    inputField.value = "";
    return inputFieldToNumber;
}

function elementValue(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const elementValueToNumber = parseFloat(elementValue);
    return elementValueToNumber;
}

function setInnerText(elementId, elementValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = elementValue;
}
