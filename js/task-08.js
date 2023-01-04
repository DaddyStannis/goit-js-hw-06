const LOGIN_FORM = document.querySelector(".login-form");

function submitForm(e) {
  e.preventDefault();
  const user = {
    email: e.target.email.value,
    password: e.target.password.value,
  };

  if (!user.email.length || !user.password.length) {
    alert("All fields must be filled!");
  } else if (user.email.endsWith(".ru")) {
    alert("Error code: Cargo 200");
  } else {
    console.log(user);
  }
  LOGIN_FORM.reset();
}

LOGIN_FORM.addEventListener("submit", submitForm);
