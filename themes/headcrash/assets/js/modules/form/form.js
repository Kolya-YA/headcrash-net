import formLoader from "./formLoader";
import formValidator from "./formValidator";
import showFormError from "./showFormError";
import showSuccess from "./showSuccess";

const cForm = document.querySelector('.form__form');

showSuccess();

if (cForm) {
    const submitBtn = document.querySelector('[type=submit]');
    const srvUrl = 'https://jsonplaceholder.typicode.com/posts';

    cForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitBtn.disabled = true;
        formLoader(submitBtn);

        const formData = new FormData(cForm);
        const data = Object.fromEntries(formData);

        if (!formValidator(data, true)) {
            console.log('The validator found some errors!');
            return;
        }

        try {    
            const response = await fetch(srvUrl)
            if (response.ok) {
                const result = await response.json();
                console.log(result);
                showSuccess();
            } else {
                console.error('Response is not OK! Details: ', response)
            }
        }
        catch (error) {
            showFormError(error);
        } finally {
            setTimeout(() => formLoader(submitBtn), 2000);
            setTimeout(() => submitBtn.disabled = false, 2000);
        }
    })
}