document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("goToContact").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
  });
});