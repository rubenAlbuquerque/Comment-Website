// Path: instagram\instagram.js
var Instagram = function () {
    this.username = null;
    this.password = null;
    this.loggedIn = false;
    this.login = function (username, password) {
        this.username = username;
        this.password = password;
        this.loggedIn = true;
    };
    this.logout = function () {
        this.loggedIn = false;
    };
    this.getProfile = function () {
        if (this.loggedIn) {
            return this.username;
        } else {
            return "Not logged in!";
        }
    };
};
