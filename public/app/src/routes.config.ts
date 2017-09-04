import { Routes,RouterModule } from '@angular/router';
import {CricketComponent} from "./cricket.component";
import {HomeComponent} from "./home.component";
import {MovieComponent} from "./movie.component";
import {CustomerComponent} from "./customer.component";
import {PoliticianComponent} from "./politician.component";
import {EmployeeComponent} from "./employee.component";
import {Car} from "./car";
import {CarComponent} from "./car.component";
import {DealerLoginComponent} from "./dealerLogin.component";
import {SelectCarComponent} from "./selectCar.component";
import {ViewAllCarsComponent} from "./viewAllCars.component";
import {DealerCRUDComponent} from "./dealerCRUD.component";
import {CustomerLoginComponent} from "./customerLogin.component";
import {BookAppointmentComponent} from "./bookAppointment.component";
import {ProductComponent} from "./product.component";
import {ShopkeeperComponent} from "./shopkeeper.component";
import {SelectProductComponent} from "./selectProduct.component";
import {ShopkeeperLoginComponent} from "./shopkeeperLogin.component";
import {ShopkeeperCRUDComponent} from "./shopkeeperCRUD.component";
import {ViewAllProductsComponent} from"./viewAllProducts.component"
let routes:Routes;
routes = [
    {path: 'home', component: HomeComponent},
    {path: 'viewAllCars', component: ViewAllCarsComponent},
    {path: 'viewAllProducts', component: ViewAllProductsComponent},
    {path: 'shopkeeperLogin', component: ShopkeeperLoginComponent},
    {path: 'dealerCRUD', component: DealerCRUDComponent},
    {path: 'car', component: CarComponent},
    {path: 'shopkeeperCRUD', component: ShopkeeperCRUDComponent},
    {path: 'product', component: ProductComponent},
    {path: 'shopkeeper', component: ShopkeeperComponent},
    {path: 'selectProduct', component: SelectProductComponent},
    {path: 'dealerLogin', component: DealerLoginComponent},
    {path: 'bookAppointment', component: BookAppointmentComponent},
    // {path:'employee',component:EmployeeComponent},
    // {path:'politician',component:PoliticianComponent},
    {path:'customer',component:CustomerComponent},
    {path: 'customerLogin', component: CustomerLoginComponent},
    {path: 'selectCar', component: SelectCarComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];

export const configuredRoutes = RouterModule.forRoot(routes);