(function() {

    /* burger menu */
    document.addEventListener('click', burgerInit);

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');
    
        if (!burgerIcon && !burgerNavLink) return;
    
        if (document.documentElement.clientWidth > 900) return;
        // if (burgerIcon) {
        //     e.preventDefault()
        // }
    
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu');
        } else {
            document.body.classList.remove('body--opened-menu');
        }
    }

    /* Modal window */
    const modal = document.querySelector('.modal');
    const modalButton = document.querySelector('.about__img-button');

    modalButton.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault();
        document.body.classList.toggle('body--opened-modal');
    }

    function closeModal(e) {
        e.preventDefault();

        const target = e.target;

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal');
        }
    }

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            document.body.classList.remove('body--opened-modal');
        }
    });

    /* tabs */

    const tabControls = document.querySelector('.tab-controls');

    tabControls.addEventListener('click', toggleTab);

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-controls__link');

        if (!tabControl) return;
        e.preventDefault();
        if (tabControl.classList.contains('tab-controls__link--active')) return;

        const tabContentID = tabControl.getAttribute('href');
        const tabContent = document.querySelector(tabContentID);
        const activeControl = document.querySelector('.tab-controls__link--active');
        const activeContent = document.querySelector('.tab-content--show');
        
        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active');
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show');
        }
        
        tabControl.classList.add('tab-controls__link--active');
        tabContent.classList.add('tab-content--show');
    }

    /* accordion */

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el =>{

        el.addEventListener('click', (e) => {

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return;
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    })

})();