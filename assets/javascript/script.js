
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
const modalCloseBtn = document.querySelector('.js-modal-close-btn')
const smallNavMenu = document.querySelector('.js-bars-menu')
const smallNav = document.querySelector('.js-smallnav')
const main = document.querySelector('.js-main')
const moreSubNav = document.querySelector('.js-more-subnav')
const smallSubNav = document.querySelector('.js-small-subnav')

function showBuyTickets() {
    modal.classList.add('open')
}

function closeBuyTickets() {
    modal.classList.remove('open')
}

function closeSmallNav() {
    smallNav.classList.remove('open')
}      

function closeSmallSubNav() {
    smallSubNav.classList.remove('open')
}      

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', closeBuyTickets)

modal.addEventListener('click', closeBuyTickets)

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

modalCloseBtn.addEventListener('click', closeBuyTickets)

smallNavMenu.addEventListener('click', function(event) {
    smallNav.classList.toggle('open')
    closeSmallSubNav()
    event.stopPropagation()
})

main.addEventListener('click', closeSmallNav)

moreSubNav.addEventListener('click', function(event) {
    smallSubNav.classList.toggle('open')
    event.stopPropagation()
})

smallSubNav.addEventListener('click', closeSmallNav)


