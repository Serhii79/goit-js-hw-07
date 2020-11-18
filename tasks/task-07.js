const inputSizeControlRef = document.querySelector('input#font-size-control');
const spanTextRef = document.querySelector('span#text');


const findeSpanSize = function (event) {
    spanTextRef.style.fontSize = `${inputSizeControlRef.valueAsNumber}px`;
}


inputSizeControlRef.addEventListener('input', () => findeSpanSize());