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
var router_1 = require("@angular/router");
let AppComponent = class {
    constructor(router) {
        this.router = router;
        this.title = "WELCOME TO CDK BAZAAR!";
    }
    home() {
        this.router.navigate(['home']);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'carcare-app',
        styleUrls: ['../css/app.component.css'],
        template: `
        <div class="app">
            <h1>{{title}}</h1>
            <marquee><h2>Great Stores , Great Choices. Find Yourself!</h2></marquee>

            <!--<a routerLink="customerLogin">Customer Login</a>-->
            <!--<a routerLink="viewAllProducts">view Products</a>-->
            <!--<a routerLink="customer">Add Customer</a>-->
            <!--<a routerLink="product">Add Product</a>-->
            <!--<a routerLink="shopkeeper">Add Shopkeeper</a>-->
            <!--<a routerLink="selectProduct">Select Product</a>-->
            <!--<a routerLink="shopkeeperLogin">shopkeeperLogin</a>-->
            <!--<a routerLink="shopkeeperCRUD">Shopkeeper CRUD</a>-->
            <input type="button" value="Home" (click)='home();'/>
            <router-outlet></router-outlet>
        </div>`
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map