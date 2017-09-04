import {Component} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";
import {Router} from "@angular/router"
import {Shopkeeper} from "./shopkeeper";

@Component({
	selector:'shopkeeperLogin',
    templateUrl:'../partials/shopkeeperLogin.component.html',
    styleUrls:['../css/shopkeeperLogin.css'],
})
export class ShopkeeperLoginComponent{

	title:string ="shopkeeperLogin";
	shopkeeper:Shopkeeper;
	successMessage:string;
    name:string="";
    password:string="";
    models:any;


    constructor(private http:Http,private router :Router) {
        this.shopkeeper = new Shopkeeper("","");
    }


    signUp(){
        this.router.navigate(['shopkeeper'])
    }
    logins() {
        console.log("Inside shopkeeperLogin()!!!!");
        console.log( this.shopkeeper.name);
        //let addUrl = "dealer/login/"+ this.dealer.username +"/"+this.dealer.password ;
        let addUrl = "shopkeeper/login/" + this.shopkeeper.name + "/" + this.shopkeeper.password;

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        //this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, options).subscribe(
            res => {
                this.successMessage = res.json();
                console.log(this.successMessage)
                if (this.successMessage) {
                    console.log("Inside true condition")
                    this.router.navigate(["shopkeeperCRUD"])
                }else{
                    console.log("Inside False Condition")
                    alert("Invalid Credentials");
                    this.router.navigate(["home"])
                }
            });
    }
}
