"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const router_1 = require("@angular/router");
const dealer_1 = require("./dealer");
let DealerLoginComponent = class DealerLoginComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.title = "dealerLogin";
        this.username = "";
        this.password = "";
        this.dealer = new dealer_1.Dealer("", "");
    }
    login() {
        console.log("Inside dealerLogin()!!!!");
        console.log(this.dealer.username);
        //let addUrl = "dealer/login/"+ this.dealer.username +"/"+this.dealer.password ;
        let addUrl = "dealer/login/" + this.dealer.username + "/" + this.dealer.password;
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        //this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.get(addUrl, options).subscribe(res => {
            this.successMessage = res.json();
            console.log(this.successMessage);
            if (this.successMessage) {
                console.log("Inside true condition");
                this.router.navigate(["dealerCRUD"]);
            }
            else {
                console.log("Inside False Condition");
                alert("Invalid Credentials");
                this.router.navigate(["home"]);
            }
        });
    }
};
DealerLoginComponent = __decorate([
    core_1.Component({
        selector: 'dealerLogin',
        templateUrl: '../partials/dealerLogin.component.html',
        styleUrls: ['../css/login.component.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
], DealerLoginComponent);
exports.DealerLoginComponent = DealerLoginComponent;
//# sourceMappingURL=dealerLogin.component.js.map