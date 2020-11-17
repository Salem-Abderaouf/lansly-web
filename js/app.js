const nav = document.querySelector('nav ul')
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
    nav.style.display = "none"
    MenuButton.style.display = "block"
  }
  else {
    nav.style.display = "flex"
    MenuButton.style.display = "none"
  }
}