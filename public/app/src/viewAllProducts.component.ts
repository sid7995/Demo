import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Car} from "./car";
import {Product} from "./product";

@Component({
    selector: 'viewAllProducts',
    templateUrl:"../partials/viewAllProducts.html",
    styleUrls: ['../css/all.css'],
})
export class ViewAllProductsComponent {

    title: string = "viewAllProducts";
    product:Product;
    successMessage: string;
    makes:any;
    models:any;
    a:boolean=false;
    b:boolean=false;


    constructor(private http: Http) {
    }
    allProducts() {
        this.b=true
        let addUrl = "/product/all/";

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(addUrl, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.product=res.json();

            });
}

    getByPrice() {
this.a=true
        let addUrl = "/viewAllProducts/byPrice/";
        console.log("In price");
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(addUrl, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.product=res.json();

            });
    }


}
