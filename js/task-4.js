const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;
  const emailName = elements.email.name.trim();
  const passwordName = elements.password.name.trim();
  const emailValue = elements.email.value.trim();
  const passwordValue = elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    const obj = {
      [emailName]: emailValue,
      [passwordName]: passwordValue,
    };

    console.log(obj);
    form.reset();
  }
}
