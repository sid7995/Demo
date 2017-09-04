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
let SelectProductComponent = class {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.title = "selectProduct";
        this.a = false;
        this.b = false;
        this.c = false;
        this.getType();
        //this.car= new Car(this.car.vIN,this.car.make,this.car.model,this.car.price,this.car.fuelType,this.car.gearType,this.car.average);
    }
    buy() {
        this.router.navigate(['customerLogin']);
    }
    getProduct(name) {
        this.c = true;
        let addUrl = "/product/getProduct/" + this.selectedType + "/" + name;
        console.log(name);
        console.log(this.selectedType);
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(addUrl, options).subscribe(res => {
            this.successMessage = res.toString();
            console.log(res.text());
            this.product = res.json();
        });
    }
    getName(type) {
        this.a = true;
        this.selectedType = type;
        console.log(this.selectedType);
        let addUrl = "/product/getName/" + this.selectedType;
        this.http.get(addUrl).subscribe(res => {
            this.successMessage = res.json();
            this.name = res.json();
            console.log(res.text());
        });
    }
    getType() {
        this.b = true;
        let addUrl = "/product/getType";
        this.http.get(addUrl).subscribe(res => {
            this.successMessage = res.json();
            this.type = res.json();
            console.log(res.text());
        });
    }
};
SelectProductComponent = __decorate([
    core_1.Component({
        selector: 'selectProduct',
        templateUrl: "../partials/selectProduct.html",
        styleUrls: ['../css/selectProduct.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
], SelectProductComponent);
exports.SelectProductComponent = SelectProductComponent;
//# sourceMappingURL=selectProduct.component.js.map