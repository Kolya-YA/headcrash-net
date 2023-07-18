export default (input) => {
    const errorMsg = input.parentNode.querySelector('.form__err-msg');
    errorMsg.hidden = true;
    input.setAttribute('aria-invalid', 'false');
    input.removeAttribute('aria-describedby');
}