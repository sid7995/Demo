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
let ViewAllProductsComponent = class {
    constructor(http) {
        this.http = http;
        this.title = "viewAllProducts";
        this.a = false;
        this.b = false;
    }
    allProducts() {
        this.b = true;
        let addUrl = "/product/all/";
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(addUrl, options).subscribe(res => {
            this.successMessage = res.toString();
            console.log(res.text());
            this.product = res.json();
        });
    }
    getByPrice() {
        this.a = true;
        let addUrl = "/viewAllProducts/byPrice/";
        console.log("In price");
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(addUrl, options).subscribe(res => {
            this.successMessage = res.toString();
            console.log(res.text());
            this.product = res.json();
        });
    }
};
ViewAllProductsComponent = __decorate([
    core_1.Component({
        selector: 'viewAllProducts',
        templateUrl: "../partials/viewAllProducts.html",
        styleUrls: ['../css/all.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], ViewAllProductsComponent);
exports.ViewAllProductsComponent = ViewAllProductsComponent;
//# sourceMappingURL=viewAllProducts.component.js.map