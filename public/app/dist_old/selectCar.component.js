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
let SelectCarComponent = class SelectCarComponent {
    constructor(http) {
        this.http = http;
        this.title = "selectCar";
        this.getmakes();
        //this.car= new Car(this.car.vIN,this.car.make,this.car.model,this.car.price,this.car.fuelType,this.car.gearType,this.car.average);
    }
    getCar(model) {
        let addUrl = "/car/getCar/" + this.selectedMake + "/" + model;
        console.log(model);
        console.log(this.selectedMake);
        var requestHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(addUrl, options).subscribe(res => {
            this.successMessage = res.toString();
            console.log(res.text());
            this.car = res.json();
        });
    }
    getModels(make) {
        this.selectedMake = make;
        let addUrl = "/car/getModels/" + this.selectedMake;
        this.http.get(addUrl).subscribe(res => {
            this.successMessage = res.json();
            this.models = res.json();
            console.log(res.text());
        });
    }
    getmakes() {
        let addUrl = "/car/selectCar";
        this.http.get(addUrl).subscribe(res => {
            this.successMessage = res.json();
            this.makes = res.json();
            console.log(res.text());
        });
    }
};
SelectCarComponent = __decorate([
    core_1.Component({
        selector: 'selectCar',
        templateUrl: "../partials/selectCar.html",
        styleUrls: ['../css/customer.component.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], SelectCarComponent);
exports.SelectCarComponent = SelectCarComponent;
//# sourceMappingURL=selectCar.component.js.map