var AdminController = {
    // Properties

    // Methods
    loadAdminList: function (adminLst) {
        var result = "";
        for (var i = 0; i < adminLst.length; i++) {
            result += "<tr>";
            result += "<td>" + (i + 1) + "." + "</td>";
            result += "<td class=" + "allow-border-right" + ">" + adminLst[i].firstName + " " + adminLst[i].lastName + "</td>";
            result += "<td class=" + "allow-border-right" + ">" + adminLst[i].email + "</td>";
            result += "<td>" + adminLst[i].phone + "</td>";
            result += "<td>" + "<button data-action=" + "Update" + " data-controller=" + "AdminController" + ">Update</button>" + "</td>";
            result += "<td>" + "<button data-action=" + "Delete" + " data-controller=" + "AdminController" + ">Delete</button>" + "</td>";
            result += "</tr>";
        }

        return result;
    },

    search: function () {
        debugger
    }
}

$(function () {
    $('#tblAdmin').html(AdminController.loadAdminList(json_data));

    $(document).on("click keyup change", '[data-action]', function (event) {
        if (event.type == 'click') {
            debugger
        }
        else if (event.type == 'keyup') {
            debugger
            $('#tblAdmin').html(AdminController.loadAdminList(SearchData(json_data, this.value)));
        }
    });
});