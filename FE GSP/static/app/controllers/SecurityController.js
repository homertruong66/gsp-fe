const SecurityController = {
    login: function (users) {
        if (email === users[0].email && password === users[0].password) {
            $('.page.login-page').hide();
            $('.page.home-page').show();
        }
        else {
            alert("Your account is not correct!");
        }
    },
    logout: function () {
        if (typeof (Storage) !== "undefined") {
            localStorage.removeItem("token");
        }

        $('.page.home-page').hide();
        $('.page.login-page').show();
        $('#box')[0].reset();
    }
}