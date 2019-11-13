var SecurityController = {
    // Properties

    // Methods
    login: function () {
        $('#login').removeClass('active');
        $('#page').addClass('active');
    },

    logout: function () {
        $('#login').addClass('active');
        $('#page').removeClass('active');
    }
}