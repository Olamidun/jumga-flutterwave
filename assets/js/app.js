// declare variables
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let open = false;

// functions
const toggleNav = () => {
  if(!open) {
    navLinks.style.display = 'flex';
    open = true;
  } else {
    navLinks.style.display = 'none';
    open = false;
  }
}

// event listeners
hamburger.addEventListener('click', toggleNav);