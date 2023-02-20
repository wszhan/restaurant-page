
function createInputWithLabel(inputName, inputPrompt, inputType, inputLabelClassList, inputAreaClassList, required, parentNode) {
    const label = document.createElement('label');
    inputLabelClassList.forEach(c => label.classList.add(c));
    label.setAttribute('for', inputName);
    label.innerText = inputPrompt;

    const input = document.createElement('input');
    inputAreaClassList.forEach(c => input.classList.add(c));
    input.setAttribute('id', inputName);
    input.setAttribute('name', inputName);
    input.setAttribute('type', inputType);

    if (required) {
        input.required = true;
    }

    parentNode.appendChild(label);
    parentNode.appendChild(input);
}


function createForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'contact-form');

    const formTitle = document.createElement('div');
    formTitle.setAttribute('id', 'form-title');
    formTitle.innerText = 'Contact Form';
    form.appendChild(formTitle);

    createInputWithLabel(
        'name', 'How should we address you?', 'text',
        ['form-label'], ['form-text-input'], true, form
    )
    createInputWithLabel(
        'email', 'What is your Email address?', 'email',
        ['form-label'], ['form-text-input'], false, form
    )

    createDropdown(
        'user-type', 'Please choose one that best describes you.',
        ['form-label'], [], false, [
            {
                optionGroupLabel: 'Please choose one from the dropdown list',
                options: {
                    customer: 'Restaurant Customer',
                    fan: 'Just a fan of Chef Bu-Bu or the cuisine',
                },
            }
        ], form
    );

    createTextarea(
        'comments', 'Any comments you would like to share with us?',
        ['form-label'], ['form-text'], false, form
    );

    createButton(form);

    return form;
}

function createButton(parentNode) {
    const button = document.createElement('button');
    button.setAttribute('id', 'submit-button');
    button.innerText = 'Send';
    parentNode.appendChild(button);
}

function createTextarea(inputName, inputPrompt, 
    inputLabelClassList, inputAreaClassList, 
    required, parentNode) {
    const label = document.createElement('label');
    inputLabelClassList.forEach(c => label.classList.add(c));
    label.setAttribute('for', inputName);
    label.innerText = inputPrompt;

    const input = document.createElement('textarea');
    inputAreaClassList.forEach(c => input.classList.add(c));
    input.setAttribute('id', inputName);
    input.setAttribute('name', inputName);
    input.setAttribute('cols', 30);
    input.setAttribute('rows', 10);

    if (required) {
        input.required = true;
    }

    parentNode.appendChild(label);
    parentNode.appendChild(input);
}

function createDropdown(inputName, inputPrompt, 
    inputLabelClassList, inputAreaClassList, 
    required, optionList, parentNode) {
    const label = document.createElement('label');
    inputLabelClassList.forEach(c => label.classList.add(c));
    label.setAttribute('for', inputName);
    label.innerText = inputPrompt;

    const input = document.createElement('select');
    inputAreaClassList.forEach(c => input.classList.add(c));
    input.setAttribute('id', inputName);
    input.setAttribute('name', inputName);

    optionList.forEach(optionObj => {
        const optGroup = optionObj.optionGroupLabel ? 
            (function() {
                const optgroupElement = document.createElement('optgroup');
                optgroupElement.setAttribute('label', optionObj.optionGroupLabel);
                return optgroupElement;
            })() : input;
        
        for (let k in optionObj.options) {
            const option = document.createElement('option');
            option.setAttribute('value', k);
            option.innerText = optionObj.options[k];
            optGroup.appendChild(option);
        }

        if (optGroup !== input) {
            input.appendChild(optGroup);
        }
    });

    if (required) {
        input.required = true;
    }

    parentNode.appendChild(label);
    parentNode.appendChild(input);
}


export function generateContactTab(contentContainer) {
    const formContainer = document.createElement('div');
    formContainer.setAttribute('id', 'contact-form-container');

    formContainer.appendChild(createForm());

    contentContainer.appendChild(formContainer);
}