const loginForm = document.querySelector(".login-form");

const submitForm = (event) => {
    event.preventDefault();
    const {elements: {email, password}} = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    console.log(`${email.name}: ${email.value}, ${password.name}: ${password.value}`);
    event.currentTarget.reset();
}
loginForm.addEventListener("submit", submitForm);