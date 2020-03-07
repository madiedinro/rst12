var Hist = /** @class */ (function () {
    function Hist() {
        var _this = this;
        this.currentUrl = '';
        this.url = function () {
            return _this.currentUrl;
        };
        this.urlChangeHandler = function (event) {
            console.log("MY_HANDLER: location: " + document.location + ", state: " + JSON.stringify(event.state));
        };
        this.currentUrl = document.location.href || '';
    }
    return Hist;
}());
var h = new Hist();
function greeter(person) {
    return "Hello, " + person + ' at ' + h.url();
}
var user = "Jane User";
document.body.textContent = greeter(user);
window.onpopstate = h.urlChangeHandler;
