import formLoader from "./formLoader";
import formValidator from "./formValidator";
import showFormError from "./showFormError";
import showSuccess from "./showSuccess";

const cForm = document.querySelector('.form__form');
const submitBtn = document.querySelector('[type=submit]');
const srvUrl = 'https://jsonplaceholder.typicode.com/posts';

cForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(cForm);
    const data = Object.fromEntries(formData);
    if (!formValidator(data, true)) {
        console.log('Validator finded some errors!');
        return;
    }

    try {
        submitBtn.disabled = true;
        formLoader(submitBtn)
        const response = await fetch(srvUrl)
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            showSuccess();
        } else {
            console.error('Not OK response: ', response)
        }
    }
    catch (error) {
        showFormError(error);
    } finally {
        setTimeout(() => formLoader(submitBtn), 2000);
        setTimeout(() => submitBtn.disabled = false, 2000);
    }
})