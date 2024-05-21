document.querySelector('.hamburger-menu').addEventListener('click', function() {
  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu.style.left === '0px') {
    mobileMenu.style.left = '-300px';
    document.querySelectorAll('.bar').forEach(bar => bar.classList.remove('change'));
  } else {
    mobileMenu.style.left = '0';
    document.querySelectorAll('.bar').forEach(bar => bar.classList.add('change'));
  }
});

