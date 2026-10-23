// Functions
function openEmail() {
  var email = document.getElementById("emailText").textContent.trim();
  var link = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email);

  window.open(link, "_blank");
}

// Events
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("emailButton").addEventListener("click", openEmail);
});