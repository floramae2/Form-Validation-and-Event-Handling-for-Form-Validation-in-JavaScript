function validateUsername(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();
    
    if (username.length < 5 || username.length > 10) {
        alert("Username must be between 5 and 10 characters long.");
        return false;
    }
    
    // Proceed with form submission
    // e.g., usernameForm.submit();
}
document.getElementById('usernameForm').addEventListener('submit', validateUsername);
