const navTogglerBtn = document.querySelector('.nav-toggler button');
// const headerBottom = document.querySelector('.header-bottom');
// const headerNav = document.querySelector('.header__nav');

navTogglerBtn.addEventListener('click', ({ target }) => {
    const newStatus = navTogglerBtn.getAttribute('aria-expanded') === 'true'
        ? false
        : true;
    navTogglerBtn.setAttribute('aria-expanded', newStatus)

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
    // headerNav.classList.toggle('header__nav--open');
});

// headerBottom.addEventListener('keyup', (e) => {
//     if (e.code === 'Escape' && document.body.style.position === 'fixed') {
//         document.body.style.position = null;
//         document.body.style.top = null;
//         headerNav.classList.toggle('header__nav--open');
//     }
// });

// navHideBtn.addEventListener('click', () => {
// navTop.addEventListener('click', (e) => {
//     console.log(e)
//     navTop.classList.toggle('header-bottom--open')
//     const scrollY = document.body.style.top
//     document.body.style.position = ''
//     document.body.style.top = ''
//     // window.scrollTo(0, parseInt(scrollY || '0') * -1)
//     window.scrollTo({
//         top: parseInt(scrollY || '0') * -1,
//         behavior: 'smooth'
//     })
// })
