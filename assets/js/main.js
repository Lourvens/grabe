/**** show menu on nav toggle clicked ****/ 
const toggleBtn = document.querySelector('.nav .nav__toggle')
const menu = document.querySelector('.nav .nav__menu')

toggleBtn.addEventListener('click', () => {
  menu.classList.add('nav__expanded')
})

const closeMenu = () => {
  menu.classList.remove('nav__expanded')
}

/**** hide menu when close btn was clicked  ****/ 
const closeBtn = document.querySelector('.nav .nav__close')
closeBtn.addEventListener('click', closeMenu)

/** hide menu when any links was clicked */
const navLinks = document.querySelectorAll('.nav .nav__menu .nav__link')
navLinks.forEach(n => n.addEventListener('click', closeMenu))

/*** add elevator class on nav when height > 50px ****/ 
const nav = document.querySelector('nav.nav')

window.onscroll = function () {
  if (this.scrollY >= 50) {
    nav.classList.add('elevator')
  } else {
    nav.classList.remove('elevator')
  }
}

// collapse controller
const collapseElement =  document.querySelector('.collapse-container')
const collapseItems = document.querySelectorAll('.collapse__item')
const collapseBtns = document.querySelectorAll('.collapse__btn')

// remove collapse all item
function collapseAll () {
  collapseItems.forEach(c => c.removeAttribute('data-expanded'))
}


collapseBtns.forEach(c => c.addEventListener('click', function() {
  collapseAll()
  const selected = this.dataset.item
  collapseItems.forEach(n => {
    n.dataset.item == selected && (n.dataset.expanded = null)
  })
}));