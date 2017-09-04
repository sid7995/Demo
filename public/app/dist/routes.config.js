var router_1 = require('@angular/router');
var home_component_1 = require("./home.component");
var customer_component_1 = require("./customer.component");
var car_component_1 = require("./car.component");
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
let routes;
routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'viewAllCars', component: viewAllCars_component_1.ViewAllCarsComponent },
    { path: 'viewAllProducts', component: viewAllProducts_component_1.ViewAllProductsComponent },
    { path: 'shopkeeperLogin', component: shopkeeperLogin_component_1.ShopkeeperLoginComponent },
    { path: 'dealerCRUD', component: dealerCRUD_component_1.DealerCRUDComponent },
    { path: 'car', component: car_component_1.CarComponent },
    { path: 'shopkeeperCRUD', component: shopkeeperCRUD_component_1.ShopkeeperCRUDComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: 'shopkeeper', component: shopkeeper_component_1.ShopkeeperComponent },
    { path: 'selectProduct', component: selectProduct_component_1.SelectProductComponent },
    { path: 'dealerLogin', component: dealerLogin_component_1.DealerLoginComponent },
    { path: 'bookAppointment', component: bookAppointment_component_1.BookAppointmentComponent },
    // {path:'employee',component:EmployeeComponent},
    // {path:'politician',component:PoliticianComponent},
    { path: 'customer', component: customer_component_1.CustomerComponent },
    { path: 'customerLogin', component: customerLogin_component_1.CustomerLoginComponent },
    { path: 'selectCar', component: selectCar_component_1.SelectCarComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
exports.configuredRoutes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=routes.config.js.map