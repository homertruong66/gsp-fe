const SecurityController = {
    login: function(users) {
        if(email === users[0].email && password === users[0].password) {
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw');
            $('#login').removeClass('active');
            $('#page').addClass('active');
        }
        else if(email !== users[0].email && password !== users[0].password){
            alert("Your email is not exist and password is not correct. Please check it again!");
        }
        else if(email === users[0].email && password !== users[0].password) {
            alert("Your password is not correct. Please check it again!");
        }
    },
    logout: function() {
        const token = localStorage.getItem('token');
        // TODO: POST id và token lên API
        localStorage.clear();
        $('#page').removeClass('active');
        $('#login').addClass('active');
        $('#box')[0].reset();
    }
}