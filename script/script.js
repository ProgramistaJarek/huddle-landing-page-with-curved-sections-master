window.onload = function () {
  let email = document.querySelector("#email");
  const btn = document.querySelector("#btn-email");
  let infoText = document.querySelector(".info");

  btn.addEventListener("click", () => {
    if (!ValidateEmail(email)) {
      infoText.classList.add("active");
      email.classList.add("wrong");
    } else {
      infoText.classList.remove("active");
      email.classList.remove("wrong");
    }
  });

  function ValidateEmail(inputText) {
    let mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputText.value.match(mailformat)) return true;
    else return false;
  }
};
