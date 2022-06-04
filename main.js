window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    menu.classList.add('scroll')
  } else {
    menu.classList.remove('scroll')
  }
}