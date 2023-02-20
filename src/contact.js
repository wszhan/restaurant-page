
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

    return form;
}


export function generateContactTab(contentContainer) {
    const formContainer = document.createElement('div');
    formContainer.setAttribute('id', 'contact-form-container');

    formContainer.appendChild(createForm());

    contentContainer.appendChild(formContainer);
}