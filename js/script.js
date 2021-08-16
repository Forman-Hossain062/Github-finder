let search = document.querySelector('#searchBtn');
let userSearch = document.querySelector('#searchUser');
let ui = new UI();


search.addEventListener('click', (e) => {
    let userText = userSearch.value;
    if (userText != "") {
        fetch(`https://api.github.com/users/${userText}`)
            .then(res => res.json())
            .then(data => {
                if (data.message === "Not Found") {
                    ui.showAlert('User not found!', "alert alert-danger")
                }
                else {
                    // console.log(data);
                    ui.showProfile(data);
                }
            })
    }
    else {
        ui.clearProfile();
    }
})