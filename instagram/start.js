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

// Path: facebook\start.js
// Path: facebook\facebook.js
var Facebook = function () {
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

// Path: twitter\start.js
// Path: twitter\twitter.js
var Twitter = function () {
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
