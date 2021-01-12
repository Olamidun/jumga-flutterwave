// declare variables
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const modal = document.querySelector('.modal');
let open = false;

// functions
const toggleSidebar = () => {
  if(!open) {
    sidebar.style.transform = 'translateX(0)';
    modal.style.display = 'block';
    open = true;
  } else {
    sidebar.style.transform = 'translateX(-300px)';
    modal.style.display = 'none';
    open = false;
  }
}

// event listeners
hamburger.addEventListener('click', toggleSidebar);
modal.addEventListener('click', toggleSidebar);
sidebar.addEventListener('click', toggleSidebar);