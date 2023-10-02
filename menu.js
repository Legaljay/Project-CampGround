const menu = document.querySelector("#Menu-btn")
const showMenu = document.querySelector("#show-menu")
const closeBtn = document.querySelector('#close-btn')

menu.addEventListener('click', () => {
  showMenu.classList.remove('hidden')
  showMenu.classList.add('block')
})
closeBtn.addEventListener('click', () => {
  showMenu.classList.add('hidden')
})

const body = document.querySelector('#body')

window.addEventListener('click', (event) => {
  if (event.target === body) {
    showMenu.classList.add('hidden')
  }
});
