/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });



    /* from nw on this is my work and not from the template 
      PS PS PS PS PS PS PS PS PS PS PS PS PS PS PS PS PS PS PS PS PS PS PS PS 
    */
    const contactForm = document.getElementById('btn-submit');
    console.log(contactForm);
    let name = document.getElementById("name").value;
    let email = document.getElementById("email"),value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let testbtn=document.getElementById("test-btn");
    console.log(testbtn);
    testbtn.addEventListener('click', () => {console.log("hiiiii")});
    let data = {"name": name, "email": email, "phone": phone, "message": message};
    contactForm.addEventListener('click' ,() =>{

        fetch("http://localhost/bootstrap-template/bootstrap-template-flexbox/bootstrap-template/add-user.php", { method: "POST", body: data })
        .then(res => res.text())
        .then((txt) => {
        console.log(txt);
        })
        .catch((err) => { console.error(err); });
        return false;
    });
        // AJAX CALL
        /*var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost/bootstrap-template/bootstrap-template-flexbox/bootstrap-template/add-user.php");
        xhr.onload = function () {
            console.log(this.response);
        };
        xhr.send(data);
        return false;*/
   
/*<!-- (A) HTML FORM -->
<form id="myForm" onsubmit="return fetchcall();">
  <input type="text" name="name" value="Jon" required/>
  <input type="email" name="email" value="jon@doe.com" required/>
  <input type="submit" value="Save"/>
</form>
 
<!-- (B) JAVASCRIPT -->
<script>
function fetchcall () {
  // (B1) GET FORM DATA
  var data = new FormData(document.getElementById("myForm"));
 
  // (B2) FETCH
  fetch("0-dummy.php", { method: "POST", body: data })
  .then(res => res.text())
  .then((txt) => {
    console.log(txt);
  })
  .catch((err) => { console.error(err); });
  return false;
}
</script>*/
});



