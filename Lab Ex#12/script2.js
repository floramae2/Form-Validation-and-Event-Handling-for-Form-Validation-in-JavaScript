function validateForm() {
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
  
    if (password == "" || age == "") {
      alert("Both Password and Age fields are required.");
      return false;
    }
  
    return true;
  }
  