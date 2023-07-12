export default () => {

    const sdialog = document.querySelector('.sdialog');
    const openBtn = document.querySelector('.sdialog__open-btn');
    const closeBtn = document.querySelector('.sdialog__close-btn');

    openBtn.addEventListener('click', () => {
        sdialog.showModal();
        setTimeout(() => {
            sdialog.close();
        }, 30000)
    })
    
    closeBtn.addEventListener('click', () => {
        sdialog.close();
    })    
}