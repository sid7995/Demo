import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {configuredRoutes} from './routes.config';

import {CustomerComponent} from './customer.component';
import {AppComponent} from "./app.component";
import {CricketComponent} from "./cricket.component";
import {HomeComponent} from "./home.component";
import {MovieComponent} from "./movie.component";
import {CarComponent} from "./car.component";
import {PoliticianComponent} from "./politician.component";
import {EmployeeComponent} from "./employee.component";
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
import {ViewAllProductsComponent} from "./viewAllProducts.component";



@NgModule({
	imports:[BrowserModule,FormsModule,HttpModule,configuredRoutes],
	declarations:[ViewAllProductsComponent,ShopkeeperCRUDComponent,ShopkeeperLoginComponent,SelectProductComponent,ShopkeeperComponent,ProductComponent,BookAppointmentComponent,DealerCRUDComponent,CustomerLoginComponent,ViewAllCarsComponent,SelectCarComponent,DealerLoginComponent,EmployeeComponent,PoliticianComponent,MovieComponent,CarComponent,CustomerComponent,AppComponent,HomeComponent,CricketComponent],
   	bootstrap:[AppComponent]
})
export class AppModule{
}

