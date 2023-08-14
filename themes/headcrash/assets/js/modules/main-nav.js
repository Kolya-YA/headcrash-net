const navTogglerBtn = document.querySelector('.nav-toggler button');
const headerNav = document.querySelector('.header__nav');

navTogglerBtn.addEventListener('click', ({ target }) => {
    const newStatus = navTogglerBtn.getAttribute('aria-expanded') === 'true'
        ? 'false'
        : 'true';        
    const navVisibility = headerNav.getAttribute('data-visibility');
    
    navTogglerBtn.setAttribute('aria-expanded', newStatus)

    console.log("vis", navVisibility)
    
    if (navVisibility === 'hidden') {
        headerNav.setAttribute('data-visibility', 'visible');
        headerNav.classList.add('header__nav--open');
    } else {
        const trEnd = (e) => {
            console.log("END", e.propertyName, navVisibility)
            headerNav.setAttribute('data-visibility', 'hidden');
            headerNav.removeEventListener('transitionend', trEnd)
        };

        headerNav.classList.remove('header__nav--open');
        headerNav.addEventListener('transitionend', trEnd)
    }

    // avoid body scrolling
    if (document.body.style.position === 'fixed') {
        document.body.style.position = null;
        document.body.style.top = null;
    } else {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.left = '0px';
        document.body.style.right = '0px';
    }
});

// headerBottom.addEventListener('keyup', (e) => {
//     if (e.code === 'Escape' && document.body.style.position === 'fixed') {
//         document.body.style.position = null;
//         document.body.style.top = null;
//         headerNav.classList.toggle('header__nav--open');
//     }
// });
