document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Mobile menu toggle (for when the screen is smaller)
  const navBar = document.getElementById('nav-bar');
  const menuToggleButton = document.createElement('button');
  menuToggleButton.textContent = 'Menu';
  menuToggleButton.classList.add('menu-toggle');
  document.getElementById('header').appendChild(menuToggleButton);

  menuToggleButton.addEventListener('click', () => {
    navBar.classList.toggle('open');
  });

  // Form validation to prevent submission if email is empty
  const form = document.getElementById('form');
  const emailInput = document.getElementById('email');

  form.addEventListener('submit', (e) => {
    if (emailInput.value === '') {
      e.preventDefault();
      alert('Please enter a valid email address.');
    }
  });