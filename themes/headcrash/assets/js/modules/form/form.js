import { inputsValidator } from "./inputsValidator";
import formValidator from "./formValidator";
import { showMsgDialog, showFormLoader } from "./showFormMsgs";

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

        if (!formValidator(data)) {
            console.log('The validator found some errors!');
            showFormLoader(cForm, 'hide');
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
                showMsgDialog('.form__succsses-dialog', 10000);
                cForm.reset();
            } else {
                console.error('Response is not OK! Details: ', response)
                showMsgDialog('.form__error-dialog', 5000);
            }
        }
        catch (error) {
            console.error('Response has some error! ', error)
            showMsgDialog('.form__error-dialog', 5000);
        } finally {
            setTimeout(() => {
                showFormLoader(cForm, 'hide');
            }, 2000);
        }
    })
}