"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.mathes = function (another) {
        return another !== undefined &&
            another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "Juliana@gmail.com": new User('Juliana@gmail.com', 'Juliana Sezoloit', 'Juju123'),
    "Amanda@gmail.com": new User('Amanda@gmail.com', 'Amanda', 'Amanda123')
};
