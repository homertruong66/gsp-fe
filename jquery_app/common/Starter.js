var json_data = [
    { "email": "admin1@tech3s-mentor.com", "firstName": "AdminF1", "lastName": "L", "phone": "+84909123452" },
    { "email": "admin2@tech3s-mentor.com", "firstName": "AdminF2", "lastName": "L", "phone": "+84909123453" },
    { "email": "admin3@tech3s-mentor.com", "firstName": "AdminF3", "lastName": "L", "phone": "+84909123454" },
    { "email": "admin4@tech3s-mentor.com", "firstName": "AdminF4", "lastName": "L", "phone": "+84909123455" },
    { "email": "admin5@tech3s-mentor.com", "firstName": "AdminF5", "lastName": "L", "phone": "+84909123452" },
    { "email": "admin6@tech3s-mentor.com", "firstName": "AdminF6", "lastName": "L", "phone": "+84909123453" },
    { "email": "admin7@tech3s-mentor.com", "firstName": "AdminF7", "lastName": "L", "phone": "+84909123454" },
    { "email": "admin8@tech3s-mentor.com", "firstName": "AdminF8", "lastName": "L", "phone": "+84909123455" }
];

var email = '';
var password = '';
var searchInput = '';

var currentPassword = '';
var newPassword = '';
var confirmPassword = '';
$(document).ready(function () {
    $('#tblAdmin').html(AdminController.init(json_data));

    $('section').removeClass('active');
    $('#login').addClass('active');

    $(document).on('click', ["data-action"], function (event) {
        //var action = event.getAttribute("data-action");
        //var action = $(this).data("action");
        //var action = $(this).data().action;
        event.preventDefault();
        var action = event.target.getAttribute("data-action");
        var controller = event.target.getAttribute('data-controller');

        console.log("Hello");
        console.log(action);
        console.log(controller);
        if (event.type === 'click') {
            if (action === 'Login') {
                if (controller === 'SecurityController') {
                    email = $('#emailInput').val();
                    password = $('#passwordInput').val();
                    SecurityController.login(email, password);
                }
            }
            else if (action === 'Logout') {
                if (controller === 'SecurityController') {
                    SecurityController.logout();
                }
            }
            else if (action === 'ChangePassword') {
                if (controller === 'UserController') {
                    UserController.changePassword();
                }
            }
            else if (action === 'Close') {
                if (controller === 'UserController') {
                    UserController.close();
                }
            }
            else if (action === 'Save') {
                if (condition === 'UserController') {
                    currentPassword = $('#currentPassword').val();
                    newPassword = $('#newPassword').val();
                    confirmPassword = $('#confirmPassword').val();
                    UserController.save(currentPassword, newPassword, confirmPassword);
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