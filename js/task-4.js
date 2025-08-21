const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  if (elements.email.value === "" || elements.password.value === "") {
    alert("All form fields must be filled in");
  } else {
    const obj = {
      [elements.email.name]: elements.email.value.trim(),
      [elements.password.name]: elements.password.value.trim(),
    };

    console.log(obj);
    form.reset();
  }
}
