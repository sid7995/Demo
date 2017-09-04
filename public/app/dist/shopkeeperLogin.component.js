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
var router_1 = require("@angular/router");
var shopkeeper_1 = require("./shopkeeper");
let ShopkeeperLoginComponent = class {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.title = "shopkeeperLogin";
        this.name = "";
        this.password = "";
        this.shopkeeper = new shopkeeper_1.Shopkeeper("", "");
    }
    signUp() {
        this.router.navigate(['shopkeeper']);
    }
    logins() {
        console.log("Inside shopkeeperLogin()!!!!");
        console.log(this.shopkeeper.name);
        //let addUrl = "dealer/login/"+ this.dealer.username +"/"+this.dealer.password ;
        let addUrl = "shopkeeper/login/" + this.shopkeeper.name + "/" + this.shopkeeper.password;
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        //this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, options).subscribe(res => {
            this.successMessage = res.json();
            console.log(this.successMessage);
            if (this.successMessage) {
                console.log("Inside true condition");
                this.router.navigate(["shopkeeperCRUD"]);
            }
            else {
                console.log("Inside False Condition");
                alert("Invalid Credentials");
                this.router.navigate(["home"]);
            }
        });
    }
};
ShopkeeperLoginComponent = __decorate([
    core_1.Component({
        selector: 'shopkeeperLogin',
        templateUrl: '../partials/shopkeeperLogin.component.html',
        styleUrls: ['../css/shopkeeperLogin.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
], ShopkeeperLoginComponent);
exports.ShopkeeperLoginComponent = ShopkeeperLoginComponent;
//# sourceMappingURL=shopkeeperLogin.component.js.map