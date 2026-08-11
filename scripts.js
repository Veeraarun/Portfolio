document.addEventListener("DOMContentLoaded", function() {
  const goToContact = document.getElementById("goToContact");
  if (goToContact) {
    goToContact.addEventListener("click", function() {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  }

  const loaderScreen = document.getElementById("loaderScreen");
  const showHomePage = () => {
    if (loaderScreen) {
      loaderScreen.classList.add("hidden");
      loaderScreen.setAttribute("aria-hidden", "true");
    }
    document.body.classList.add("loaded");
  };

  setTimeout(showHomePage, 2200);

  const navLinks = document.querySelectorAll('.nav-list a');
  const sections = document.querySelectorAll('section[id]');

  const activateNavLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      if (link.parentElement) {
        link.parentElement.classList.toggle('active', isActive);
      }
    });
  };

  const getCurrentSectionId = () => {
    let currentId = sections[0] ? sections[0].id : '';
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.25) {
        currentId = section.id;
      }
    });
    return currentId;
  };

  const updateActiveLink = () => {
    const currentId = getCurrentSectionId();
    activateNavLink(currentId);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activateNavLink(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0.15,
    }
  );

  sections.forEach((section) => observer.observe(section));
  updateActiveLink();

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.parentElement.classList.remove('active'));
      link.parentElement.classList.add('active');
    });
  });
});