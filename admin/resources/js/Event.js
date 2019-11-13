// $(document).ready(function () {
//     $(document).on('click', ["data-action"], function (event) {
//         //var action = $(this).attr("data-action");
//         //const action = $(this).data("action");
//         //var action = $(this).data().action;
//         // const action = event.target.attributes["data-action"].value;

//         console.log("Hello");
//         // console.log(action);
//         if (event.type == 'click') {
//             if (event.target.getAttribute('data-action') == 'Login') {debugger
//                 SecurityController.login($('#emailInput').val(), $('#passwordInput').val())
//             }
//         }
//     })
// })

$(function () {
    $(document).on('click', ["data-action"], function (event) {
        if (event.type == 'click') {
            if (event.target.getAttribute('data-action') == 'Login') {
                SecurityController.login();
            }
        }
    });
});