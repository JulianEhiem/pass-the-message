(function () {
  const input = document.querySelector("#message");
  const submit = document.querySelector("#messageSubmit");
  const previousText = document.querySelector(".previousMessage");
  const feedback = document.querySelector(".feedback");

  submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (input.value === "") {
      alert("Please enter a value to pass");
    } else {
      previousText.textContent = input.value;
      input.value = "";
    }
  });
})();
