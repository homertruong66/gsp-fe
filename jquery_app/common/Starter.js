var email = '';
var password = '';
var searchInput = '';
$(document).ready(function () {
    $('.page.login-page').show();

    $(document).on('click', ["data-action"], function (event) {
        //var action = event.getAttribute("data-action");
        //var action = $(this).data("action");
        //var action = $(this).data().action;
        event.preventDefault();
        var action = event.target.getAttribute("data-action");
        var controller = event.target.getAttribute('data-controller');

        console.log("Hello");
        console.log(controller);
        console.log(event.type);
        if (event.type === 'click') {
            if (action === 'Login') {
                if (controller === 'SecurityController') {
                    email = $('#emailInput').val();
                    password = $('#passwordInput').val();
                    SecurityController.login(users);
                }
            }
            else if (action === 'Logout') {
                if (controller === 'SecurityController') {
                    SecurityController.logout();
                }
            }
        }
    })
    $(document).on('keyup', ["data-action"], function (event) {
        var action = event.target.getAttribute("data-action");
        var controller = event.target.getAttribute('data-controller');
        if (event.type === 'keyup') {
            if (action === 'Search') {
                if (controller === 'AdminController') {
                    searchInput = $('#searchInput').val().toLowerCase();
                    AdminController.search();
                }
            }
        }
    })
})