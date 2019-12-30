const UserController = {
    changePassword: function() {
        $('#page').removeClass('active');
        $('#changePassword').addClass('active');
    },
    
    close: function() {
        $('#changePassword').removeClass('active');
        $('#page').addClass('active');
    },

    save: function(currentPassword, newPassword, confirmPassword) {
        const data = {
            currentPassword: currentPassword,
            newPassword: newPassword,
            confirmPassword: confirmPassword
        }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/change-password',
            dataType: 'JSON',
            contentType: 'application/json',
            data: JSON.stringify(data),

            success: function(data, responseText, jqXHR) {
                $('#changePasswordBox')[0].reset();
                alert('Password changed successfully!');
                $('#changePassword').removeClass('active');
                $('#page').addClass('active');
            },

            error: function(data, responseText, jqXHR) {
                alert(responseText);
            }
        })
    }
}