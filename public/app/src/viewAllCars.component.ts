import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Car} from "./car";

@Component({
    selector: 'viewAllCars',
    templateUrl:"../partials/viewAllCars.html",
    styleUrls: ['../css/customer.component.css'],
})
export class ViewAllCarsComponent {

    title: string = "viewAllCars";
    car:Car;
    successMessage: string;
    makes:any;
    models:any;


    constructor(private http: Http) {
    }
    allCars() {

        let addUrl = "/car/all/";

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(addUrl, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.car=res.json();

            });
}
    getByMake() {

        let addUrl = "/viewAllCars/byMake/";
        console.log("In make");
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(addUrl, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.car=res.json();

            });
    }

    getByPrice() {

        let addUrl = "/viewAllCars/byPrice/";
        console.log("In price");
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(addUrl, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.car=res.json();

            });
    }

    getByAverage() {

        let addUrl = "/viewAllCars/byAverage/";

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(addUrl, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.car=res.json();

            });
    }
}
