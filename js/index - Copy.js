const toggle = document.querySelector('nav-toggle')
const navigation = document.querySelector('.nav-link')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})