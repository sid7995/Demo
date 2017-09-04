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
var shopkeeper_1 = require("./shopkeeper");
let ShopkeeperComponent = class {
    constructor(http) {
        this.http = http;
        this.title = "Shopkeeper";
        this.shopkeeper = new shopkeeper_1.Shopkeeper("", "");
    }
    addShopkeeper() {
        console.log("Inside addShopkeeper()!!!!");
        let addUrl = "/shopkeeper/add/" + "/" + this.shopkeeper.name + "/" + this.shopkeeper.password;
        console.log("URL >>>>>>" + addUrl);
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        //this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.shopkeeper, options).subscribe(res => {
            this.successMessage = res.toString();
            console.log(res.text());
            this.errorMessage = "";
        }, error => {
            console.log("error");
            console.log(error);
            this.errorMessage = error;
            this.successMessage = "";
        });
    }
};
ShopkeeperComponent = __decorate([
    core_1.Component({
        selector: 'shopkeeper',
        templateUrl: '../partials/shopkeeper.component.html',
        styleUrls: ['../css/shopkeeper.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], ShopkeeperComponent);
exports.ShopkeeperComponent = ShopkeeperComponent;
//# sourceMappingURL=shopkeeper.component.js.map