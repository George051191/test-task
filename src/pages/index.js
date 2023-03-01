import './index.scss'
import { NavMenu } from '../components/nav-menu'
const range = document.querySelector('.offer__range')
const thumb = document.querySelector('.offer__thumb')
const track = document.querySelector('.offer__track-inner')
const header = document.querySelector('.header')
const picture = document.querySelector('.offer__picture')
const rangeOutput = document.querySelector('.offer__form-span')
const navItems = document.querySelectorAll('.header__nav-item')
const burgerMenu = document.querySelector('.header__burger-menu')
const nav = document.querySelector('.header__nav')

burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('header__nav_type-visible')
    })
    ///nav
navItems.forEach(el => {
    const menuItem = new NavMenu(el, navItems)
    menuItem.addListeners()
})

///input range logic
const updateSlider = (value) => {
    thumb.style.left = `${value}%`
    thumb.style.transform = `translate(-${value}%, -50%)`
    track.style.width = `${value}%`
}

range.addEventListener('input', (e) => {
    updateSlider(e.target.value)
    rangeOutput.textContent = `${e.target.value}м2`
})

///picture scroll
document.addEventListener('scroll', () => {

    if (window.pageYOffset > 200) {
        picture.style.right = `-${window.pageYOffset}px`
    }
    if ((window.pageYOffset < 200)) {
        picture.style.right = 0
    }
})


////header scroll
document.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
        header.classList.add('header__scrolled')

    }
    if (window.pageYOffset < 80) {
        header.classList.remove('header__scrolled')
    }
})