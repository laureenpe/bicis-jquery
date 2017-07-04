var element = document.querySelector(".form-signup");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  if(validateForm()){
    window.location.href = "https://www.youtube.com/watch?v=y6Sxv-sUYtM";

  }
});
