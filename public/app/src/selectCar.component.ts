import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Car} from "./car";

@Component({
    selector: 'selectCar',
    templateUrl:"../partials/selectCar.html",
    styleUrls: ['../css/customer.component.css'],
})
export class SelectCarComponent {

    title: string = "selectCar";
    car:Car;
    successMessage: string;
    makes:any;
    models:any;
    selectedMake:string;

    constructor(private http: Http) {
        this.getmakes();
        //this.car= new Car(this.car.vIN,this.car.make,this.car.model,this.car.price,this.car.fuelType,this.car.gearType,this.car.average);
    }


    getCar(model:string) {

        let addUrl = "/car/getCar/" + this.selectedMake + "/" + model;
        console.log(model)
        console.log(this.selectedMake)
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(addUrl, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.car=res.json();

            });

    }


getModels(make:string) {

        this.selectedMake = make;
        let addUrl = "/car/getModels/" + this.selectedMake;
        this.http.get(addUrl).subscribe(
            res => {
                this.successMessage = res.json();
                this.models = res.json();
                console.log(res.text());
            });
    }

    getmakes() {
        let addUrl = "/car/selectCar";
        this.http.get(addUrl).subscribe(
            res => {
                this.successMessage = res.json();
                this.makes = res.json();
                console.log(res.text());
            });
    }

    /*selectCar() {
        let addUrl = "/selectCar/";
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        // this.car.logo = this.car.make + '-' + this.car.model + '.png';
        this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.car, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
            });
    }*/
}
