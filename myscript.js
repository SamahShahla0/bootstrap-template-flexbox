const send_btn = document.querySelector('#submit');

send_btn.addEventListener=('click',validateInput());

function validate(){
  function phonenumber(inputtxt)
  {
    var phoneno = /^\d{10}$/;
    if((inputtxt.value.match(phoneno))
          {
        return true;
          }
        else
          {
          alert("message");
          return false;
          }
  }

}