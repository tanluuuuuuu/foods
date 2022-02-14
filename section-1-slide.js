const allIcons = document.querySelectorAll('.section-1-icon i')

setInterval(() => {
    const icon = document.querySelector('.section-1-icon .change')
    icon.classList.remove('change')
    try {
        icon.nextElementSibling.classList.add('change')
    } catch (error) {
        allIcons[0].classList.add('change')
    }
}, 2000)
