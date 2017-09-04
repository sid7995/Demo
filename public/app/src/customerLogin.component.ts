import {Component} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";

import {Customer} from "./customer";
import {Router} from "@angular/router"

@Component({
    selector:'customerLogin',
    templateUrl:'../partials/customerLogin.component.html',
    styleUrls:['../css/login.component.css'],
})
export class CustomerLoginComponent{

    title:string ="customerLogin";
    customer:Customer;
    successMessage:string;
    name:string="";
    password:string="";
    models:any;


    constructor(private http:Http,private router :Router) {
        this.customer = new Customer( " ",0,"","","");
    }
    custSignUp(){
        this.router.navigate(['customer'])
    }
    custLogin() {
        console.log("Inside customerLogin()!!!!");
        console.log( this.customer.name);
        //let addUrl = "dealer/login/"+ this.dealer.username +"/"+this.dealer.password ;
        let addUrl = "/customer/customerLogin" +"/" +this.customer.name + "/" + this.customer.password;

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        //this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.get(addUrl, options).subscribe(
            res => {
                this.successMessage = res.json();
                console.log(this.successMessage)
                if (this.successMessage) {
                    console.log("Inside true condition")
                    alert("Welcome you are logged in successfully");
                    this.router.navigate(["bookAppointment"])
                }else{
                    console.log("Inside False Condition")
                    alert("Invalid Credentials");
                    this.router.navigate(["selectProduct"])
                }
            });
    }
}
