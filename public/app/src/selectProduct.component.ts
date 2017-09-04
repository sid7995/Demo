import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";
import {Product} from "./product";

@Component({
    selector: 'selectProduct',
    templateUrl:"../partials/selectProduct.html",
    styleUrls: ['../css/selectProduct.css'],
})
export class SelectProductComponent {

    title: string = "selectProduct";
    product:Product;
    successMessage: string;
    type:any
    name:any
    selectedType:string;
    a:boolean=false;
    b:boolean=false;
    c:boolean=false;
    constructor(private http: Http,private router :Router) {
        this.getType();
        //this.car= new Car(this.car.vIN,this.car.make,this.car.model,this.car.price,this.car.fuelType,this.car.gearType,this.car.average);
    }

buy(){
    this.router.navigate(['customerLogin'])
}
    getProduct(name:string) {
        this.c=true;
        let addUrl = "/product/getProduct/" + this.selectedType + "/" + name;
        console.log(name)
        console.log(this.selectedType)
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(addUrl, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.product=res.json();

            });

    }


getName(type:string) {
    this.a=true;
        this.selectedType = type;
    console.log(this.selectedType);
        let addUrl = "/product/getName/" + this.selectedType;
        this.http.get(addUrl).subscribe(
            res => {
                this.successMessage = res.json();
                this.name = res.json();
                console.log(res.text());
            });
    }

    getType() {
        this.b=true;
        let addUrl = "/product/getType";
        this.http.get(addUrl).subscribe(
            res => {
                this.successMessage = res.json();
                this.type = res.json();
                console.log(res.text());
            });
    }



}
