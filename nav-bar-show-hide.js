const arrow = document.querySelector("#arrow")
const navbar = document.querySelector("#navbar-hide")

arrow.addEventListener('click', () => {
    if (navbar.id === 'navbar-hide')
    {
        arrow.classList.add('rotate')
        navbar.id = 'navbar-full'
    }
    else
    {
        arrow.classList.remove('rotate')
        navbar.id = 'navbar-hide'
    }
})