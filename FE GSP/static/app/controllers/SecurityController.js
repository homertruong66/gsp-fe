const SecurityController = {
    login: function(users) {
        if(email === users[0].email && password === users[0].password) {
            $('#login').removeClass('active');
            $('#page').addClass('active');
        }
        else if(email !== users[0].email && password !== users[0].password){
            alert("Your email is not exist and password is not correct. Please check it again!");
        }
        else if(email === users[0].email && password !== users[0].password) {
            alert("Your password is not correct. Please check it again!");
        }
    },
    logout: function() {
        $('#page').removeClass('active');
        $('#login').addClass('active');
        $('#box')[0].reset();
    }
}