//Creates a function to check criteria for user ID
function idCheck(){
//Creates a variable that accesses user input from the username field
  var str = document.getElementById("nameField").value;
  return str.length >= 6 &&
  !str.includes("!") &&
  !str.includes("#") &&
  !str.includes("$");
};

//Creates a function to check criteria for password
function passCheck(){
//Creates a variable that accesses user input from the password field
  var str = document.getElementById("passField").value;
  return str.length >= 6 &&
  (str.includes("!") || str.includes("#") || str.includes ("$")
  ) &&
  str != "password!" &&
  (str.includes("0") || str.includes("1") || str.includes("2") || str.includes("3") || str.includes("4") || str.includes("5") || str.includes("6") || str.includes("7") || str.includes("8") || str.includes("9")) &&
  str != str.toUpperCase() &&
  str != str.toLowerCase();
};

//Creates a function that combines both previous functions to check username and password
function bothCheck(userId, password) {
  console.log(idCheck() && passCheck());
//Creates condition that returns feedback to user depending on validity of credentials
  if (idCheck() && passCheck() === true) {
    document.getElementById("outputField").innerHTML = "Your credentials have been accepted!";
  }
  else {
    document.getElementById("outputField").innerHTML = "Invalid. Please re-enter a username or password";
  }
}
