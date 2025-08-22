const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const emailName = event.target.elements.email.name.trim();
  const passwordName = event.target.elements.password.name.trim();
  const emailValue = event.target.elements.email.value.trim();
  const passwordValue = event.target.elements.password.value.trim();

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
