const SecurityController = {
    login: function(username, password) {
        const data = {
            username: username,
            password: password
        }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/login',
            dataType: 'text',
            contentType: 'text/plain',
            data: {
                username: username,
                password: password
            },
            success: function(data, responseText, jqXHR) {
                var data = JSON.stringify(data);
                console.log(data);
                //lay token tu BE tra ve
                var tokenKey = globalObject.headerSecurityTokenKey;
                var userProfileKey = globalObject.headerUserProfileKey;
                localStorage[tokenKey] = jqXHR.getResponseHeader(tokenKey);
                localStorage[userProfileKey] = jqXHR.getResponseHeader(userProfileKey);
                //lay userInfo tu Be tra ve

                //cho an hien form login
                $('#login').removeClass('active');
                $('#page').addClass('active');
            },
            error: function(data, responseText, jqXHR) {
                //bao loi
                alert(responseText);
            }
        })
    },
    logout: function() {
        //luu token và id vao localStorage
        var headers = {};
        headers[globalObject.headerSecurityTokenKey] = localStorage[globalObject.headerSecurityTokenKey];

        // clear local token
        localStorage.removeItem(globalObject.headerSecurityTokenKey);
        localStorage.removeItem(globalObject.headerAdminProfileKey);

        //xoa token, id va userInfo
        
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/login',
            dataType: 'text',
            contentType: 'text/plain',
            success: function(data, responseText, jqXHR) {
                $('#page').removeClass('active');
                $('#login').addClass('active');
                $('#box')[0].reset();
            },
            error: function(data, responseText, jqXHR) {
                //bao loi
            }
        }) 
        
    }
}