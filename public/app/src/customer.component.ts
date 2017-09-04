import {Component} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";

import {Customer} from "./customer";
import {Router} from "@angular/router"

@Component({
	selector:'customer',
    templateUrl:'../partials/customer.component.html',
    styleUrls:['../css/signUp.css'],
})
export class CustomerComponent{

	title:string ="Customer";
	customer:Customer;
	successMessage:string;
    errorMessage:string;
    customerId: number;
    name: string = "";
    mobileNo: number;
    city: string;
    email: string = "";
    password: string = "";


    constructor(private http:Http ,private router:Router) {
        this.customer = new Customer("",0,"","","");
    }

    addCustomer() {
        console.log("Inside addCustomer()!!!!");
        console.log( this.customer.name);
        let addUrl = "/customer/create/"+  this.customer.name + "/" + this.customer.mobileNo + "/" + this.customer.city + "/" +this.customer.email + "/" + this.customer.password;


        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        //this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.customer, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.errorMessage=""
                alert("Signed up Successfully")
                this.router.navigate(['customerLogin'])
            },
            error => {
                this.errorMessage = <any>error;
                this.successMessage = ""
            });

    }
}
