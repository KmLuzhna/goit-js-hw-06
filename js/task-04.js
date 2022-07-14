let counterValue = 0;
const newValue = document.querySelector('#value');

const decr = document.querySelector('button[data-action="decrement"]')
const clicktDecr = () => {
    counterValue -= 1;
    newValue.textContent = counterValue;
}
decr.addEventListener("click", clicktDecr);

const incr= document.querySelector('button[data-action="increment"]')
const clickIncr = () => {
    counterValue +=1;
    newValue.textContent = counterValue;
}
incr.addEventListener("click", clickIncr)