export default (input) => {
    const errorMsg = input.parentNode.querySelector('.form__err-msg');
    errorMsg.hidden = false;
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', `form-${input.name}-err-msg`);
}   

