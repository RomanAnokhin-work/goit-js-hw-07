const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const emailValue = event.target.elements.email.value;
  const passwordValue = event.target.elements.password.value;
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  }
  const elements = event.target.elements;
  const obj = {
    [elements.email.name]: emailValue,
    [elements.password.name]: passwordValue,
  };

  console.log(obj);
  form.reset();
}
