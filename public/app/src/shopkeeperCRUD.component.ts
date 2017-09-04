import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Product} from "./product";
import {Router} from "@angular/router"

@Component({
    selector: 'shopkeeperCRUD',
    templateUrl:"../partials/shopkeeperCRUD.html",
    styleUrls: ['../css/crud.css'],
})
export class ShopkeeperCRUDComponent {

    title: string = "dealerCRUD";
    product:Product;
    successMessage: string;
    id:number;


    constructor(private http: Http,private router:Router) {
           }
addProduct(){

    this.router.navigate(['product'])
}
    allProducts() {
this.a=true
        let addUrl = "/product/all/";
        console.log("all product")
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(addUrl, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.product=res.json();

            });
    }
    deleteProduct(e:any) {
            console.log(e.target.name)
        let v =e.target.name;
        let addUrl = "/product/delete/"+ v;
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(addUrl, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());


            });

    }


}
