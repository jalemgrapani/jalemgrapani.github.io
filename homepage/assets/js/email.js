var emailButton = document.getElementById("emailButton");

emailButton.addEventListener("click", function () {
  var email = document.getElementById("emailText").textContent.trim();

  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      encodeURIComponent(email),
    "_blank"
  );
});