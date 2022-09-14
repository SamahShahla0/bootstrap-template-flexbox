window.addEventListener('DOMContentLoaded', event => {
    var displaydiv = document.getElementById('users');
    console.log("hey heyyyyyyyy");

    /*fetch("http://localhost/bootstrap-template/bootstrap-template-flexbox/bootstrap-template/selectingAll.php")
    .then(res => res.text())
    .then((txt) => {
      console.log(txt);
    })*/

    async function getUsers() {
        let url = 'users.http://localhost/bootstrap-template/bootstrap-template-flexbox/bootstrap-template/selectingAll.php';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    async function renderUsers() {
        let users = await getUsers();
        let html = '';
        users.forEach(user => {
            let htmlSegment = `<div class="user">
                                <h2>${user.name}</h2>
                                <h2>${user.phone}</h2>
                                <h2>${user.message}</h2>
                                <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                            </div>`;
    
            html += htmlSegment;
        });
    
        let container = document.querySelector('.container');
        container.innerHTML = html;
    }
    
    renderUsers();
   
});