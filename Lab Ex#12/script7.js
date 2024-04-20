function validateForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var country = document.getElementById('country').value;
  
    if (name.length > 20 || age < 0 || country === "") {
      alert("Please fill out all fields correctly.");
      return false;
    }
    return true;
  }
  
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      // You can add further actions like form submission to a server here
    }
  });
  