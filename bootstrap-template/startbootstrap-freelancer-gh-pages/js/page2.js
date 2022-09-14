window.addEventListener('DOMContentLoaded', event => {
    console.log("hey heyyyyyyyy");

    /*fetch("http://localhost/bootstrap-template/bootstrap-template-flexbox/bootstrap-template/selectingAll.php")
    .then(res => res.text())
    .then((txt) => {
      console.log(txt);
    })*/
 
    async function getUsers() {
        let url = 'http://localhost/bootstrap-template/bootstrap-template-flexbox/bootstrap-template/selectingAll.php';
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
            let htmlSegment = `<div class="user"> Row Start
                                <h4> name: ${user.name}</h4>
                                <h4>phone number: ${user.phone}</h4>
                                <h4>message: ${user.message}</h4>
                                <div>email:<a href="email:${user.email}">${user.email}</a></div><br><br> 
                                Row End <br><hr/>
                            </div>`;
    
            html += htmlSegment;
        });
    
        let container = document.querySelector('#users');
        container.innerHTML = html;
    }
    
    renderUsers();
   
});