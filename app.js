const exp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const form = document.getElementById("email");
const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  const email = document.getElementById("email").value;
  console.log(email);
  if (email.match(exp)) {
    form.classList.remove("formBad");
    text.classList.remove("errorTextVisible");
  } else {
    form.classList.add("formBad");
    text.classList.add("errorTextVisible");
  }
});
