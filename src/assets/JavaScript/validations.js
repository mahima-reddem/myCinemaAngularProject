function validate(){
    console.log("validations");
    var custName = document.forms["myForm"]["custName"].value;
   // alert(document.getElementById(myName.value));
    var custMobileno = document.forms["myForm"]["custMobileno"].value;
    var custEmail = document.forms["myForm"]["custEmail"].value;
    //var emailfilter=/^\w+[\+\.\w-]@([\w-]+\.)\w+[\w-]\.([a-z]{2,4}|\d+)$/i
    /*var b=emailfilter.test(email);
    if(b==false)
    {
      alert("Please Enter a valid Mail ID");
      return false;
    }*/
    if (custName.length < 3) {
      alert("Name should contain atleast 3 characters");
      custName.focus;
      return false;
    }
    if (isNaN(custMobileno)) {
      alert("The phone number contains illegal characters.");
      custPhone.focus;
      return false;
    }
    if (custMobileno.length != 10){
      alert("Phone number should contain 10 digits");
      custPhone.focus;
      return false;
    }
    
    return true;
}