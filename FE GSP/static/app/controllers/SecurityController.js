const SecurityController = {
    login: function(users) {
        if(email === users[0].email && password === users[0].password) {
            $('.page.login-page').hide();
            $('.page.home-page').show();
        }
        else if(email !== users[0].email && password !== users[0].password){
            alert("Your email is not exist and password is not correct. Please check it again!");
        }
        else if(email === users[0].email && password !== users[0].password) {
            alert("Your password is not correct. Please check it again!");
        }
    },
    logout: function() {
        $('.page.home-page').hide();
        $('.page.login-page').show();
        $('#box')[0].reset();
    }
}