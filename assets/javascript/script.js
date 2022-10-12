
const main = document.querySelector('.js-main')
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
const modalCloseBtn = document.querySelector('.js-modal-close-btn')
const barsMenu = document.querySelector('.js-bars-menu')
const smallNav = document.querySelector('.js-smallnav')
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

// Modal buy interaction
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', closeBuyTickets)

modal.addEventListener('click', closeBuyTickets)

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

modalCloseBtn.addEventListener('click', closeBuyTickets)


// Small Nav Menu interaction
barsMenu.addEventListener('click', function(event) {
    smallNav.classList.toggle('open')
    closeSmallSubNav()
    event.stopPropagation()
    if (!smallNav.classList.contains('open'))
        console.log("Quan")
})

main.addEventListener('click', closeSmallNav)

moreSubNav.addEventListener('click', function(event) {
    smallSubNav.classList.toggle('open')
    event.stopPropagation()
})

smallSubNav.addEventListener('click', closeSmallNav)


