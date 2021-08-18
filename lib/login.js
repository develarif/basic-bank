let userEmail = document.getElementById('userEmail');
let userPaswd = document.getElementById('userPaswd');
let sbmtBtn = document.getElementById('sbmtBtn');


sbmtBtn.addEventListener('click', function (x) {
    x.preventDefault();

    if (userEmail.value != '' && userPaswd.value != '') {
        console.log(userEmail.value);
        console.log(userPaswd.value);
    } else {
        alert('Please, Write you credential!');
    }

});

