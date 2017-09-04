var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var customer_1 = require("./customer");
var router_1 = require("@angular/router");
let CustomerLoginComponent = class {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.title = "customerLogin";
        this.name = "";
        this.password = "";
        this.customer = new customer_1.Customer(" ", 0, "", "", "");
    }
    custSignUp() {
        this.router.navigate(['customer']);
    }
    custLogin() {
        console.log("Inside customerLogin()!!!!");
        console.log(this.customer.name);
        //let addUrl = "dealer/login/"+ this.dealer.username +"/"+this.dealer.password ;
        let addUrl = "/customer/customerLogin" + "/" + this.customer.name + "/" + this.customer.password;
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        //this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.get(addUrl, options).subscribe(res => {
            this.successMessage = res.json();
            console.log(this.successMessage);
            if (this.successMessage) {
                console.log("Inside true condition");
                alert("Welcome you are logged in successfully");
                this.router.navigate(["bookAppointment"]);
            }
            else {
                console.log("Inside False Condition");
                alert("Invalid Credentials");
                this.router.navigate(["selectProduct"]);
            }
        });
    }
};
CustomerLoginComponent = __decorate([
    core_1.Component({
        selector: 'customerLogin',
        templateUrl: '../partials/customerLogin.component.html',
        styleUrls: ['../css/login.component.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
], CustomerLoginComponent);
exports.CustomerLoginComponent = CustomerLoginComponent;
//# sourceMappingURL=customerLogin.component.js.map