const send_btn = document.getElementById('submit');
let in_name = document.getElementById('fullname');
let in_email = document.getElementById('email');
let in_password = document.getElementById('phone');
let in_message = document.getElementById('message');


var error_div = document.createElement('div');
var error_line = document.createTextNode("test");
console.log(error_line);
error_div.appendChild(error_line);
console.log(error_div);

send_btn.onclick = function validate(){

  if (in_name.value.length < 5){
    var error_line1 = document.createTextNode("Name must be a minimum of 5 characters.");
    error_div.appendChild(error_line1);
    console.log(error_div);
  }



}


//var contact_section = document.querySelector("contact").appendChild(error_div);
