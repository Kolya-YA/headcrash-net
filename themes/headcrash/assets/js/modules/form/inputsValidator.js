import validators from "./validators";
import { setInputInvalid, setInputValid } from "./setInputValidInvalid";

export const inputsValidator = (inputs) => {
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            console.log(input.value, validators(input));
            if (validators(input)) {
                input.setAttribute('aria-invalid', 'false');
            } else {
                input.removeAttribute('aria-invalid');
            }
        })
        
        input.addEventListener('change', () => {
            if (validators(input)) {
                setInputValid(input)
            } else {
                setInputInvalid(input);
            }
        })
    })
}