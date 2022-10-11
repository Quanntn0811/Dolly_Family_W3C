const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const modalClose = document.querySelector('.js-modal-close')
        const modalContainer = document.querySelector('.js-modal-container')
        const modalCloseBtn = document.querySelector('.js-modal-close-btn')
        const smallNavBtn = document.querySelector('.js-bars-btn')
        const smallNav = document.querySelector('.js-smallnav')
        const main = document.querySelector('.js-main')

        function showBuyTickets() {
            modal.classList.add('open')
        }

        function closeBuyTickets() {
            modal.classList.remove('open')
        }

        function closeSmallNav() {
            smallNav.classList.remove('open')
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

        smallNavBtn.addEventListener('click', function() {
            smallNav.classList.toggle('open')
        })

        main.addEventListener('click', closeSmallNav)

 
        smallNavBtn.addEventListener('click', function(event) {
            event.stopPropagation()
        })
     