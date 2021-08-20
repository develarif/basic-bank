let userEmail = document.getElementById('userEmail');
let userPaswd = document.getElementById('userPaswd');
let sbmtBtn = document.getElementById('sbmtBtn');


sbmtBtn.addEventListener('click', function (x) {
    x.preventDefault();

    if (userEmail.value != '' && userPaswd.value != '') {
        if (userEmail.value == 'abcd@gmail.com' && userPaswd.value == '12345') {
            location.href = "profile.html";
        } else {
            alert('Wrong Info!');
        }
    } else {
        alert('Please, Write you credential!');
    }

});