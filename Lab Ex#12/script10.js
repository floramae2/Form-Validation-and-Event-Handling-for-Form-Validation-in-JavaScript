function validateCheckbox(event) {
    const checkbox = document.getElementById('acceptTerms');
    if (!checkbox.checked) {
        alert("Please accept the terms and conditions.");
        event.preventDefault();
    }
}
document.getElementById('checkboxForm').addEventListener('submit', validateCheckbox);
