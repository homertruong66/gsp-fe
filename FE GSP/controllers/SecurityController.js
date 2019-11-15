const SecurityController = {
    login: function() {
        $('.page.login-page').hide();
        $('.page.home-page').show();
    },
    logout: function() {
        $('.page.home-page').hide();
        $('.page.login-page').show();
        $('#box')[0].reset();
    }
}