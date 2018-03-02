const validateForm = (function()
{
    //private properties
    const classError = 'error';

  const showFieldValidation = function (input, inputIsValid) {

        if (!inputIsValid) {
            input.classList.add(options.classError);
            displayFieldError(input);
        } else {
            input.classList.remove(options.classError);
            hideFieldError(input);
        }
    };

    const displayFieldError = function (input) {
        const field = input.closest('.error');
        const fieldError = field.parentNode.querySelector('.field-error');

        if (fieldError === null) {
        const divError = document.createElement('div');
        const errorText = input.dataset.error;
        divError.classList.add('field-error');
        divError.innerText = errorText;
        field.parentNode.appendChild(divError);
        }

    };

    const hideFieldError = function (input) {
        const fieldError = input.parentNode.lastElementChild;
        const fieldErrorClass = fieldError.className;

        if (fieldErrorClass === "field-error") {
            fieldError.remove();
        }
    };

    const testInputText = function (input) {
        let information = document.querySelectorAll(".btn-info");

        const informationReg = /^[a-zA-Z][a-z0-9_-]{3,19}$/;
        for (let i = 0; i < information.length; i++) {
            if (!informationReg.test(input.value)) {
                showFieldValidation(input, false);
                return false;
            } else {
                showFieldValidation(input, true);
                return true;
            }
        }
    };

    const testInputEmail = function (input) {
        const mailReg = new RegExp('^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$', 'gi');

        if (!mailReg.test(input.value)) {
            showFieldValidation(input, false);
            return false;
        } else {
            showFieldValidation(input, true);
            return true;
        }
    };

    //prepareElements add event to element with attribute 'required'
    const prepareElements = function () {
        for (let i = 0; i < options.form.length; i++) {

            const elements = options.form[i].querySelectorAll(":scope [required]");

        [].forEach.call(elements, function (element) {
            //check type element
            if (element.nodeName.toUpperCase() == "INPUT") {
                const type = element.type.toUpperCase();

                //for every single element, add function check
                if (type == "TEXT") {
                    element.addEventListener("keyup", function () {
                        testInputText(element);
                    });
                    element.addEventListener("blur", function () {
                        testInputText(element);
                    });
                }
                if (type == "EMAIL") {
                    element.addEventListener("keyup", function () {
                        testInputEmail(element);
                    });
                    element.addEventListener("blur", function () {
                        testInputEmail(element);
                    });
                }
            }
            if (element.nodeName.toUpperCase() == "TEXTAREA") {
                element.addEventListener("keyup", function () {
                    testInputText(element);
                });
                element.addEventListener("blur", function () {
                    testInputText(element);
                });
            }
        });
    }
    };

    const formSubmit = function () {
        for (let i = 0; i < options.form.length; i++) {
            options.form[i].addEventListener('submit', function(e) {
            e.preventDefault();

            let validated = true;
            const elements = options.form[i].querySelectorAll(':scope [required]');

            [].forEach.call(elements, function (element) {
                if (element.nodeName.toUpperCase() == 'INPUT') {
                    const type = element.type.toUpperCase();

                    if (type == 'TEXT') {
                        if (!testInputText(element))
                            validated = false;
                    }
                    if (type == 'EMAIL') {
                        if (!testInputEmail(element))
                            validated = false;
                    }
                }
                if (element.nodeName.toUpperCase() == 'TEXTAREA') {
                    if (!testInputText(element))
                        validated = false;
                }
            });

            if (validated) {
                this.classList.add('submit-busy');
                this.disabled = true;
                // this.submit();
            } else {
                return false;
            }
        });
    }
    };

    //public method
    const init = function (_options) {
        //transmit options to our module
        options = {
            form: _options.form || null,
            classError: _options.classError || "error"
        };

        if (options.form == null || options.form == undefined || options.form.length == 0) {
            console.warn("validateForm: Wrong form");
            return false;
        }

        //novalidate - there will be no default validation bubbles for the required elements
        for (let i = 0; i < options.form.length; i++) {
            options.form[i].setAttribute("novalidate", "novalidate");
        }

        prepareElements();
        formSubmit();
    };

    return {
        init: init
    };
})();

document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelectorAll('.form');
        for (let i = 0; i < form.length; i++) {
            validateForm.init({
                form: form
            });
        }
});
