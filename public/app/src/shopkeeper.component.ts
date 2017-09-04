import {Component} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";

import {Shopkeeper} from "./shopkeeper";
import {Router} from "@angular/router"

@Component({
	selector:'shopkeeper',
    templateUrl:'../partials/shopkeeper.component.html',
    styleUrls:['../css/shopkeeper.css'],
})
export class ShopkeeperComponent{

	title:string ="Shopkeeper";
	shopkeeper:Shopkeeper;
	successMessage:string;
    errorMessage:string;




    constructor(private http:Http ) {
        this.shopkeeper = new Shopkeeper("","");
    }

    addShopkeeper() {
        console.log("Inside addShopkeeper()!!!!");
        let addUrl = "/shopkeeper/add/"+ "/" + this.shopkeeper.name +"/" + this.shopkeeper.password  ;
        console.log("URL >>>>>>" + addUrl);

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        //this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.shopkeeper, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.errorMessage=""
            },
            error => {
                console.log("error");
                console.log(error);
                this.errorMessage = <any>error;
                this.successMessage = ""
            });

    }
}
