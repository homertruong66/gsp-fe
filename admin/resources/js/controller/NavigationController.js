var NavigationController = {
    // Properties

    // Methods
    onHome: function () {
        $('#home').addClass('active');
        $('#admin').removeClass('active');
    },

    onAdmin: function () {
        $('#home').removeClass('active');
        $('#admin').addClass('active');
    }
}