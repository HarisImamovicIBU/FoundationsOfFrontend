let UserService = {
    init: function () {
        this.checkIfLoggedIn();
        $("#login-form").on("submit", function (event) {
            event.preventDefault();
            let email = $("#email").val();
            let password = $("#password").val();
            UserService.login({ email: email, password: password });
        });
    },

    checkIfLoggedIn: function () {
        let token = localStorage.getItem("token");
        console.log('Checking if logged in. Token:', token); //Testing
        if (token) {
            window.location.replace("index.html");
        }
    },

    login: function (user) {
        console.log('Attempting to log in with user:', user); //Testing

        // Simulating fetching users from localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];
        console.log('Fetched users:', users); //Testing
        let foundUser = users.find(u => u.email === user.email && u.password === user.password);

        if (foundUser) {
            console.log('User found:', foundUser); //Testing
            localStorage.setItem("token", btoa(user.email)); //Token representation
            window.location.replace("index.html");
        } else {
            console.log('Invalid credentials'); 
            toastr.error('Invalid credentials');
        }
    },

    logout: function () {
        console.log('Logging out');
        localStorage.removeItem("token");
        window.location.replace("login.html");
    },
};

$(document).ready(function() {
    UserService.init();
});
if (!localStorage.getItem("users")) {
    let users = [
        { id: 1, name: "STD1", email: "std1@stu.ibu.edu.ba", password: "12", admin: true },
        { id: 2, name: "STD2", email: "std2@stu.ibu.edu.ba", password: "123", admin: false }
    ];
    localStorage.setItem("users", JSON.stringify(users));
}
