function calculateRectangleArea()
{
    const rectangleBaseInput =  document.getElementById('rectangle-base');
    const baseText = rectangleBaseInput.value;
    const base = parseFloat(baseText);
    console.log(base);

    const rectangleHeightInput = document.getElementById('rectangle-height');
    const heightText = rectangleHeightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    const area = base * height;
    console.log(area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}