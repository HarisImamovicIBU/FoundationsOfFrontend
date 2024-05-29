console.log("UserService script loaded.");

let UserService = {
    init: function () {
        console.log("UserService initialized.");
        this.checkIfLoggedIn();
        $("#login-form").on("submit", function (event) {
            event.preventDefault();
            let email = $("#email").val();
            let password = $("#password").val();
            UserService.login({ email: email, password: password });
        });
    },

    checkIfLoggedIn: function () {
        let urlParams = new URLSearchParams(window.location.search);
        let skipCheck = urlParams.has('skipCheck');
        let token = localStorage.getItem("token");

        if (token && !skipCheck && window.location.pathname.endsWith("login.html")) {
            window.location.replace("index.html");
        }
    },

    login: function (user) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let foundUser = users.find(u => u.email === user.email && u.password === user.password);

        if (foundUser) {
            localStorage.setItem("token", btoa(user.email));
            window.location.replace("index.html");
        } else {
            toastr.error('Invalid credentials');
        }
    },

    logout: function () {
        console.log("Logging out...");
        localStorage.removeItem("token");
        window.location.replace("login.html?skipCheck=true");
    },
};

$(document).ready(function() {
    UserService.init();
});
if (!localStorage.getItem("users")) {
    let users = [
        { id: 1, name: "STD1", email: "std1@stu.ibu.edu.ba", password: "12", admin: true },
        { id: 2, name: "STD2", email: "std2@stu.ibu.edu.ba", password: "123", admin: false },
        { id: 3, name: "STD3", email: "std3@stu.ibu.edu.ba", password: "1234", admin: false}
    ]; //localStorage.clear(); ???
    localStorage.setItem("users", JSON.stringify(users));
}