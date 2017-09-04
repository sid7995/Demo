import {Component} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";

import {Product} from "./product";
import {Router} from "@angular/router"

@Component({
	selector:'product',
    templateUrl:'../partials/product.component.html',
    styleUrls:['../css/product.css'],
})
export class ProductComponent{

	title:string ="Product";
	product:Product;
	successMessage:string;
    errorMessage:string;




    constructor(private http:Http ,private router:Router) {
        this.product = new Product(0,"","",0);
    }
    goBack(){
        this.router.navigate(["shopkeeperCRUD"])
    }

    addProduct() {
        console.log("Inside addProduct()!!!!");
        console.log(this.product.id);
        let addUrl = "/product/add/"+  this.product.id + "/" + this.product.type +"/" + this.product.name + "/" + this.product.price ;
        console.log("URL >>>>>>" + addUrl);

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        //this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.product, options).subscribe(
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
