import formLoader from "./formLoader";
import formValidator from "./formValidator";
import showFormError from "./showFormError";
import showSuccess from "./showSuccess";
import inputValidator from "./inputValidator";
import markInputInvalid from "./markInputInvalid";
import markInputValid from "./markInputValid";

const cForm = document.querySelector('.form__form');

if (cForm) {
    const submitBtn = document.querySelector('[type=submit]');
    const srvUrl = 'https://jsonplaceholder.typicode.com/posts';

    const inputs = cForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (inputValidator(input)) {
                input.setAttribute('aria-invalid', 'false');
            } else {
                input.removeAttribute('aria-invalid');
            }
        })
        
        input.addEventListener('change', () => {
            if (inputValidator(input)) {
                markInputValid(input)
            } else {
                markInputInvalid(input);
            }
        })
    })

    cForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitBtn.disabled = true;
        formLoader(submitBtn, 'show');

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
            } else {
                console.error('Response is not OK! Details: ', response)
            }
        }
        catch (error) {
            showFormError(error);
        } finally {
            setTimeout(() => {
                formLoader(submitBtn, 'hide');
                submitBtn.disabled = false
                showSuccess();
            }, 2000);
        }
    })
}