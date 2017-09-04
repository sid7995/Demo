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
const product_1 = require("./product");
let ProductComponent = class ProductComponent {
    constructor(http) {
        this.http = http;
        this.title = "Product";
        this.product = new product_1.Product(0, "", "", 0);
    }
    addProduct() {
        console.log("Inside addProduct()!!!!");
        let addUrl = "/product/add/" + this.product.id + "/" + this.product.type + "/" + this.product.name + "/" + this.product.price;
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        //this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.product, options).subscribe(res => {
            this.successMessage = res.toString();
            console.log(res.text());
            this.errorMessage = "";
        }, error => {
            this.errorMessage = error;
            this.successMessage = "";
        });
    }
};
ProductComponent = __decorate([
    core_1.Component({
        selector: 'product',
        templateUrl: '../partials/product.component.html',
        styleUrls: ['../css/login.component.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map