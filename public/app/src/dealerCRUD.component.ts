import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Car} from "./car";

@Component({
    selector: 'dealerCRUD',
    templateUrl:"../partials/dealerCRUD.html",
    styleUrls: ['../css/customer.component.css'],
})
export class DealerCRUDComponent {

    title: string = "dealerCRUD";
    car:Car;
    successMessage: string;
    vIN:number;


    constructor(private http: Http) {
           }

    allCarss() {

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
    deleteCar(e:any) {
            console.log(e.target.name)
        let v =e.target.name;
        let addUrl = "/car/delete/"+ v;
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(addUrl, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());


            });

    }


}
