
const spanValueRef = document.querySelector('span#value');
const decrementRef = spanValueRef.previousSibling.previousSibling;
const incrementRef = spanValueRef.nextSibling.nextSibling;

// console.log(decrementRef);
// console.log(incrementRef);
// console.log(spanValueRef);


let counterValue = 0;
function computeValue() {
    spanValueRef.textContent = counterValue;
}
function decrement() {
    counterValue -= 1;
    computeValue();
}
function increment() {
    counterValue += 1;
    computeValue();
}


decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);
