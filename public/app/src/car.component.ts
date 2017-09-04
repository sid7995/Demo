import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Car} from "./car";

@Component({
    selector: 'car',
    templateUrl: '../partials/car.html',
    styleUrls: ['../css/customer.component.css'],
})
export class CarComponent {

    title: string = "addCar Form";
    car: Car;
    successMessage: string;
    errorMessage: string;
    vIN: number;
    make: string = "";
    model: string = "";
    price: number;
    fuelType: string = "";
    gearType: string = "";
    average: number;


    constructor(private http: Http) {
        this.car = new Car(0, "", "", 0, "", "", 0);
    }

    addCars() {
        console.log("Inside car()!!!!");
        console.log(this.car.vIN + "/" + this.car.make + "/" + this.car.model + "/" + this.car.price +"/"+ this.car.fuelType +"/"+ this.car.gearType + "/" + this.car.average);
        let addUrl = "/car/create/" + this.car.vIN + "/" + this.car.make + "/" + this.car.model + "/" + this.car.price +"/"+ this.car.fuelType +"/"+ this.car.gearType + "/" + this.car.average;
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        //this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());

        this.http.post(addUrl, this.car, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.errorMessage = ""
            },
            error => {
                this.errorMessage = <any>error;
                this.successMessage = ""
            });
    }
}
