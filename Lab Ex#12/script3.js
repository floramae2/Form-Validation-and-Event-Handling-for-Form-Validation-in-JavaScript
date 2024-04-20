function validateForm() {
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
  
    if (city == "" || country == "") {
      alert("Both City and Country fields are required.");
      return false;
    }
  
    if (city.length > 10) {
      alert("City name cannot be longer than 10 characters.");
      return false;
    }
  
    return true;
  }
  