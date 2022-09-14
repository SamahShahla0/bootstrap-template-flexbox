window.addEventListener('DOMContentLoaded', event => {
    var displaydiv = document.getElementById('users');
    

    fetch("http://localhost/bootstrap-template/bootstrap-template-flexbox/bootstrap-template/selectingAll.php", { method: "GET", body: users })
    .then(res => res.text())
    .then((txt) => {
      console.log(txt);
    })
    .catch((err) => { console.error(err); });
    return false;
    
});