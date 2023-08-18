export const showSuccessMsg = () => {
    const successDialog = document.querySelector('.form__succsses-dialog');
    const closeBtn = successDialog.querySelector('sdialog__close-btn');

    sdialog.showModal();
    
    setTimeout(() => {
        successDialog.close();
    }, 15000)
    
    closeBtn.addEventListener('click', () => {
        successDialog.close();
    },  { once: true })    
}

export const showErrorMsg = (error) => {
    const errorDialog = document.querySelector('.form__error-dialog');
    const closeBtn = errorDialog.querySelector('sdialog__close-btn');

    sdialog.showModal();
    
    setTimeout(() => {
        errorDialog.close();
    }, 15000)
    
    closeBtn.addEventListener('click', () => {
        errorDialog.close();
    },  { once: true })  
};

export const showFormLoader = (cForm, action = 'hide') => {
    const submitBtn = cForm.querySelector('[type=submit]');
    const label = submitBtn.querySelector('.label');
    const loader = submitBtn.querySelector('.loader');
    
    if (action === 'show') {
        submitBtn.disabled = true;
        label.hidden = true;
        loader.hidden = false;
    } else {
        submitBtn.disabled = false;
        loader.hidden = true;
        label.hidden = false;
    }
};