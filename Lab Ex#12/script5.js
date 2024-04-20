function validateForm() {
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;

    if (email.trim() === '' || comments.trim() === '' || comments.length > 250) {
        alert('Please fill out all fields and ensure Comments is less than 250 characters.');
        return false;
    }

    return true;
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
