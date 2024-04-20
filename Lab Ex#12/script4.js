function validateForm() {
    var name = document.getElementById('name').value;
    var bio = document.getElementById('bio').value;

    if (name.trim() === '' || bio.trim() === '' || bio.length > 200) {
        alert('Please fill out all fields and ensure Bio is less than 200 characters.');
        return false;
    }

    return true;
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
