export class NavMenu {
    constructor(navItem, navItemsArray) {
        this.navItem = navItem
        this.navItemsArray = navItemsArray
        this.closeIcon = this.navItem.querySelector('.header__close-icon')
        this.miniMenu = this.navItem.querySelector('.header__select-menu')
    }

    addListeners() {
        this.navItem.addEventListener('click', (e) => {
            this.navItemsArray.forEach(el => {

                el.firstElementChild.classList.remove('header__close-icon_type-visible')
                el.lastElementChild.classList.remove('header__select-menu_type-visible')
            })
            this.closeIcon.classList.add('header__close-icon_type-visible')
            this.miniMenu.classList.add('header__select-menu_type-visible')


        })
        this.closeIcon.addEventListener('click', (e) => {
            e.stopPropagation()
            this.miniMenu.classList.remove('header__select-menu_type-visible')
            e.currentTarget.classList.remove('header__close-icon_type-visible')



        })
    }
}