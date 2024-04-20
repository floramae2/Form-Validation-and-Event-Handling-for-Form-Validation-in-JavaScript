function handleFormSubmission(event) {
    event.preventDefault();
    alert("Form submission prevented!");
    // You can add further actions here if needed
  }
  
  document.getElementById('myForm').addEventListener('submit', handleFormSubmission);
  