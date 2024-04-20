function validateRadio(event) {
    const genders = document.getElementsByName('gender');
    let genderSelected = false;

    for (const gender of genders) {
        if (gender.checked) {
            genderSelected = true;
            break;
        }
    }

    if (!genderSelected) {
        alert("Please select a gender.");
        event.preventDefault();
    }
}
document.getElementById('radioForm').addEventListener('submit', validateRadio);
