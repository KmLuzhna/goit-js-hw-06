const size = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeSize = (event) => {
    const newSize = event.currentTarget.value;
    text.style.fontSize = `${newSize}px`;
}
size.addEventListener("input", changeSize);