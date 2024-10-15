const formSteps = document.querySelectorAll('.form-step');
let currentStep = 0;

function nextStep() {
    const currentForm = formSteps[currentStep];

    // Validate current step
    if (validateCurrentStep(currentForm)) {
        currentForm.classList.remove('active'); // Hide current step
        currentStep++;
        if (currentStep < formSteps.length) {
            formSteps[currentStep].classList.add('active'); // Show next step
        }
    }
}

function prevStep() {
    const currentForm = formSteps[currentStep];
    currentForm.classList.remove('active'); // Hide current step
    currentStep--;
    if (currentStep >= 0) {
        formSteps[currentStep].classList.add('active'); // Show previous step
    }
}

// Validate visible form fields
function validateCurrentStep(formStep) {
    const fields = formStep.querySelectorAll('input[required], select[required]');
    let isValid = true;
    fields.forEach(field => {
        if (!field.checkValidity()) {
            field.reportValidity(); // Show validation error messages
            isValid = false; // Set validity flag to false if any field is invalid
        }
    });
    return isValid; // Return overall validity
}