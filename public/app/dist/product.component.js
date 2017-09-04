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
var product_1 = require("./product");
var router_1 = require("@angular/router");
let ProductComponent = class {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.title = "Product";
        this.product = new product_1.Product(0, "", "", 0);
    }
    goBack() {
        this.router.navigate(["shopkeeperCRUD"]);
    }
    addProduct() {
        console.log("Inside addProduct()!!!!");
        console.log(this.product.id);
        let addUrl = "/product/add/" + this.product.id + "/" + this.product.type + "/" + this.product.name + "/" + this.product.price;
        console.log("URL >>>>>>" + addUrl);
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        //this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.product, options).subscribe(res => {
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
ProductComponent = __decorate([
    core_1.Component({
        selector: 'product',
        templateUrl: '../partials/product.component.html',
        styleUrls: ['../css/product.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map