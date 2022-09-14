window.addEventListener('DOMContentLoaded', event => {
    var displaydiv = document.getElementById('users');
    console.log("hey heyyyyyyyy");

    fetch("http://localhost/bootstrap-template/bootstrap-template-flexbox/bootstrap-template/selectingAll.php")
    .then(res => res.text())
    .then((txt) => {
      console.log(txt);
    })
   
});