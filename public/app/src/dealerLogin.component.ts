import {Component} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";
import {Router} from "@angular/router"
import {Dealer} from "./dealer";

@Component({
	selector:'dealerLogin',
    templateUrl:'../partials/dealerLogin.component.html',
    styleUrls:['../css/login.component.css'],
})
export class DealerLoginComponent{

	title:string ="dealerLogin";
	dealer:Dealer;
	successMessage:string;
    username:string="";
    password:string="";
    models:any;


    constructor(private http:Http,private router :Router) {
        this.dealer = new Dealer("","");
    }



    login() {
        console.log("Inside dealerLogin()!!!!");
        console.log( this.dealer.username);
        //let addUrl = "dealer/login/"+ this.dealer.username +"/"+this.dealer.password ;
        let addUrl = "dealer/login/" + this.dealer.username + "/" + this.dealer.password;

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
                    this.router.navigate(["dealerCRUD"])
                }else{
                    console.log("Inside False Condition")
                    alert("Invalid Credentials");
                    this.router.navigate(["home"])
                }
            });
    }
}
