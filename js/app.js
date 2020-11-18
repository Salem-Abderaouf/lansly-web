const navList = document.querySelector('#navbar ul')
const MiniNav = document.getElementsByClassName('mini-navBar')[0]
const MenuButton = document.getElementsByClassName('nav-menu')[0]

window.onload = () => { checkWindowWidth() }
window.addEventListener('resize', () => {
  checkWindowWidth()
})

const toggelNavbar = () => {
  MiniNav.classList.toggle('Active')
}
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