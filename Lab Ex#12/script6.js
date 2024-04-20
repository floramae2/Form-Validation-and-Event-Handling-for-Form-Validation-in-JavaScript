function validateForm() {
    var name = document.getElementById('name').value;
    var age = parseInt(document.getElementById('age').value);
    var country = document.getElementById('country').value;

    if (name.trim() === '' || age < 0 || name.length > 20 || country === '') {
        alert('Please fill out all fields correctly.');
        return false;
    }

    return true;
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
