var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var routes_config_1 = require('./routes.config');
var customer_component_1 = require('./customer.component');
var app_component_1 = require("./app.component");
var cricket_component_1 = require("./cricket.component");
var home_component_1 = require("./home.component");
var movie_component_1 = require("./movie.component");
var car_component_1 = require("./car.component");
var politician_component_1 = require("./politician.component");
var employee_component_1 = require("./employee.component");
var dealerLogin_component_1 = require("./dealerLogin.component");
var selectCar_component_1 = require("./selectCar.component");
var viewAllCars_component_1 = require("./viewAllCars.component");
var dealerCRUD_component_1 = require("./dealerCRUD.component");
var customerLogin_component_1 = require("./customerLogin.component");
var bookAppointment_component_1 = require("./bookAppointment.component");
var product_component_1 = require("./product.component");
var shopkeeper_component_1 = require("./shopkeeper.component");
var selectProduct_component_1 = require("./selectProduct.component");
var shopkeeperLogin_component_1 = require("./shopkeeperLogin.component");
var shopkeeperCRUD_component_1 = require("./shopkeeperCRUD.component");
var viewAllProducts_component_1 = require("./viewAllProducts.component");
let AppModule = class {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, routes_config_1.configuredRoutes],
        declarations: [viewAllProducts_component_1.ViewAllProductsComponent, shopkeeperCRUD_component_1.ShopkeeperCRUDComponent, shopkeeperLogin_component_1.ShopkeeperLoginComponent, selectProduct_component_1.SelectProductComponent, shopkeeper_component_1.ShopkeeperComponent, product_component_1.ProductComponent, bookAppointment_component_1.BookAppointmentComponent, dealerCRUD_component_1.DealerCRUDComponent, customerLogin_component_1.CustomerLoginComponent, viewAllCars_component_1.ViewAllCarsComponent, selectCar_component_1.SelectCarComponent, dealerLogin_component_1.DealerLoginComponent, employee_component_1.EmployeeComponent, politician_component_1.PoliticianComponent, movie_component_1.MovieComponent, car_component_1.CarComponent, customer_component_1.CustomerComponent, app_component_1.AppComponent, home_component_1.HomeComponent, cricket_component_1.CricketComponent],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map