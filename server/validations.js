const validator = require("email-validator");

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 12;

const validateName = (someName) => {
    if(someName) {
        if(typeof(someName) === "string") {
            if(someName !== " ") {
                return true;
            }
        }
    }

    return false;
};

const validateEmail = (email) => {
    return validator.validate(email);
};

const validatePassword = (password) => {
    if(password) {
        if(typeof(password) === "string") {
            if(password.length >= MIN_PASSWORD_LENGTH && password.length <= MAX_PASSWORD_LENGTH) {
                const regexNum = /[0-9]/;
                const regexCapitalLetter = /[A-Z]/;
                const regexLetter = /[a-z]/;
                const regexSpecialChar = /[!@#$%^&?*]/;
                const regexCharNotAllowed = /[(+=`~^_<\[\].,/\\>)-]/;

                return (
                    regexNum.test(password) 
                        && regexCapitalLetter.test(password) 
                        && regexLetter.test(password)
                        && regexSpecialChar.test(password)
                        && !regexCharNotAllowed.test(password)
                );
            }
        }
    }

    return false;
};

const validateForm = (firstName, lastName, email, password) => {
    if(validateName(firstName) && validateName(lastName) && validateEmail(email) && validatePassword(password)) {
        return true;
    }

    return false;
};

module.exports = { validateForm };