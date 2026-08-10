document.addEventListener("DOMContentLoaded", function() {
  const goToContact = document.getElementById("goToContact");
  if (goToContact) {
    goToContact.addEventListener("click", function() {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  }

  const loaderScreen = document.getElementById("loaderScreen");
  const showHomePage = () => {
    document.body.classList.add("loaded");
    if (loaderScreen) {
      loaderScreen.setAttribute("aria-hidden", "true");
    }
  };

  setTimeout(showHomePage, 2200);
});