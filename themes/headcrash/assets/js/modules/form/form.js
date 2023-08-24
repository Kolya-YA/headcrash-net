import { inputsValidator } from "./inputsValidator";
import formValidator from "./formValidator";
import { showSuccessMsg, showErrorMsg, showFormLoader } from "./showFormMsgs";

// const apiURL = 'http://localhost:3000/api/mailer';
const apiURL = 'https://rmc-mailer.onrender.com/api/mailer';

const cForm = document.querySelector('.form__form');

if (cForm) {
    const srvUrl = apiURL;

    inputsValidator(cForm.querySelectorAll('input, textarea'));

    cForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        showFormLoader(cForm, 'show');

        const formData = new FormData(cForm);
        const data = Object.fromEntries(formData);

        if (!formValidator(data, true)) {
            console.log('The validator found some errors!');
            return;
        }

        try {    
            const response = await fetch(srvUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': apiURL
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                const result = await response.json();
                console.log(result);
            } else {
                console.error('Response is not OK! Details: ', response)
            }
        }
        catch (error) {
            showErrorMsg(error);
        } finally {
            setTimeout(() => {
                showFormLoader(cForm, 'hide');
                showSuccessMsg();
            }, 2000);
        }
    })
}