const navList = document.querySelector('nav ul')
const MiniNav = document.getElementsByClassName('mini-navBar')[0]
const MenuButton = document.getElementsByClassName('nav-menu')[0]


const checkWindowWidth = () => {
  if (window.innerWidth < 620) {
    navList.style.display = "none"
    MenuButton.style.display = "block"
  }
  else {
    navList.style.display = "flex"
    MenuButton.style.display = "none"
  }
}

window.addEventListener('DOMContentLoaded', () => checkWindowWidth())
window.addEventListener('resize', () => checkWindowWidth())

const toggelNavbar = () => {
  MiniNav.classList.toggle('Active')
}
