function validation() {
    
  if (document.Formfill.Username.value == "") {
    document.getElementById("result").innerHTML = "Enter Username*";
    return false;
  } else if (document.Formfill.Username.value.length < 6) {
    document.getElementById("result").innerHTML = "Atleast Six letter*";
    return false;
  } else if (document.Formfill.Email.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Email*";
    return false;
  } else if (document.Formfill.Password.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Password*";
    return false;
  } else if (document.Formfill.Password.value.length < 6) {
    document.getElementById("result").innerHTML = "Password Must Be 6 Digits*";
    return false;
  } else if (document.Formfill.Cpassword.value == "") {
    document.getElementById("result").innerHTML = "Enter Confirm Password*";
    return false;
  } else if (
    document.Formfill.Cpassword.value !== document.Formfill.Password.value
  ) {
    document.getElementById("result").innerHTML =
      "Your Password Doesn't Matched*";
    return false;
  } else {
        let Ok = confirm("Are You Sure??"); 
            alert("Registration Success!")
  }
}