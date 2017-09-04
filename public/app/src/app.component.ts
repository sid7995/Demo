import {Component} from "@angular/core";
import {Router} from "@angular/router"
@Component({
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

})
export class AppComponent {
constructor(private router:Router){

}
    title: string = "WELCOME TO CDK BAZAAR!";
home(){
    this.router.navigate(['home'])
}
}
