function parallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');

    const area = base * height;

    setInnerTextById('parallelogram-area', area);

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area){
    const e = document.getElementById(elementId);
    e.innerText = area;
}
