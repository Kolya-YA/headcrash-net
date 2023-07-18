export default () => {

    const sdialog = document.querySelector('.sdialog');
    const closeBtn = document.querySelector('.sdialog__close-btn');

    sdialog.showModal();
    
    setTimeout(() => {
        sdialog.close();
    }, 15000)
    
    closeBtn.addEventListener('click', () => {
        sdialog.close();
    })    
}