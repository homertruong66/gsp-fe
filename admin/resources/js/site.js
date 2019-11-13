var json_data = [
    { "email": "admin1@tech3s-mentor.com", "firstName": "AdminF1", "lastName": "L", "phone": "+84909123452" },
    { "email": "admin2@tech3s-mentor.com", "firstName": "AdminF2", "lastName": "L", "phone": "+84909123453" },
    { "email": "admin3@tech3s-mentor.com", "firstName": "AdminF3", "lastName": "L", "phone": "+84909123454" },
    { "email": "admin4@tech3s-mentor.com", "firstName": "AdminF4", "lastName": "L", "phone": "+84909123455" }
];

$(function () {
    $('#tblAdmin').html(AdminController.loadAdminList(json_data));

    $(document).on("click keyup change", '[data-action]', function (event) {
        if (event.type == 'click') {
            var controller = event.target.getAttribute('data-controller');
            var action = event.target.getAttribute('data-action')
            if (controller == "SecurityController") {
                if (action == "Login") {
                    SecurityController.login();
                }
                else if (action == "Logout") {
                    SecurityController.logout();
                }
            }
            else if (controller == "NavigationController") {
                if (action == "Home") {
                    NavigationController.onHome();
                }
                else if (action == "Admin") {
                    NavigationController.onAdmin();
                }
            }
            else if (controller == "AdminController") {

            }
        }
        else if (event.type == 'keyup') {
            var lst = AdminController.search(json_data, this.value);
            $('#tblAdmin').html(AdminController.loadAdminList(lst));
        }
    });
});