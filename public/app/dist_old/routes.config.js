"use strict";
const router_1 = require('@angular/router');
const home_component_1 = require("./home.component");
const car_component_1 = require("./car.component");
const dealerLogin_component_1 = require("./dealerLogin.component");
const selectCar_component_1 = require("./selectCar.component");
const viewAllCars_component_1 = require("./viewAllCars.component");
const dealerCRUD_component_1 = require("./dealerCRUD.component");
const customerLogin_component_1 = require("./customerLogin.component");
const bookAppointment_component_1 = require("./bookAppointment.component");
const product_component_1 = require("./product.component");
let routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'viewAllCars', component: viewAllCars_component_1.ViewAllCarsComponent },
    { path: 'dealerCRUD', component: dealerCRUD_component_1.DealerCRUDComponent },
    { path: 'car', component: car_component_1.CarComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: 'dealerLogin', component: dealerLogin_component_1.DealerLoginComponent },
    { path: 'bookAppointment', component: bookAppointment_component_1.BookAppointmentComponent },
    // {path:'employee',component:EmployeeComponent},
    // {path:'politician',component:PoliticianComponent},
    //{path:'customer',component:CustomerComponent},
    { path: 'customerLogin', component: customerLogin_component_1.CustomerLoginComponent },
    { path: 'selectCar', component: selectCar_component_1.SelectCarComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
exports.configuredRoutes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=routes.config.js.map