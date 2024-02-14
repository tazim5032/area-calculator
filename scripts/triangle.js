function calculateTriangleArea()
{
    const triangleBaseInput =  document.getElementById('triangle-base');
    const baseText = triangleBaseInput.value;
    const base = parseFloat(baseText);
    console.log(base);

    const triangleHeightInput = document.getElementById('triangle-height');
    const heightText = triangleHeightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}