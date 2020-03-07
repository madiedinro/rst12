

class Hist {
    currentUrl: String = ''
    constructor() {
        this.currentUrl = document.location.href || ''
    }

    url: () => String = () => {
        return this.currentUrl
    }

    public urlChangeHandler = (event) => {
        console.log("MY_HANDLER: location: " + document.location + ", state: " + JSON.stringify(event.state));
    }

}

const h = new Hist()

function greeter(person) {
    return "Hello, " + person + ' at ' + h.url();
}

let user = "Jane User";

document.body.textContent = greeter(user);


window.onpopstate = h.urlChangeHandler

