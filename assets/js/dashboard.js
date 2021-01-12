// declare variables
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.backdrop');
let open = false;

// functions
const toggleSidebar = () => {
  if(!open) {
    sidebar.style.transform = 'translateX(0)';
    backdrop.style.display = 'block';
    open = true;
  } else {
    sidebar.style.transform = 'translateX(-300px)';
    backdrop.style.display = 'none';
    open = false;
  }
}

// event listeners
hamburger.addEventListener('click', toggleSidebar);
backdrop.addEventListener('click', toggleSidebar);
sidebar.addEventListener('click', toggleSidebar);