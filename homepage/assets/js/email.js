// Open Gmail compose window with the email from the page
function openEmail() {
  var email = document.getElementById("emailText").textContent;
  email = email.trim();

  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email),
    "_blank"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var emailButton = document.getElementById("emailButton");
  emailButton.addEventListener("click", openEmail);
});