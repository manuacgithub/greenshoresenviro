// FAQ accordion
(function () {
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      // close all
      document.querySelectorAll('.faq-item.open').forEach(function (el) {
        el.classList.remove('open');
        el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      // open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });
}());


// Dynamic Hamburger / Mobile Nav Toggle
document.addEventListener('click', function (e) {
  var hamburger = e.target.closest('#hamburger');
  var navLink = e.target.closest('#navLinks a');
  var navLinks = document.getElementById('navLinks');
  var hamburgerBtn = document.getElementById('hamburger');

  // Toggle open on hamburger click
  if (hamburger && navLinks) {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  }

  // Close nav on link click inside mobile menu
  if (navLink && navLinks && hamburgerBtn) {
    hamburgerBtn.classList.remove('open');
    navLinks.classList.remove('open');
  }
});
