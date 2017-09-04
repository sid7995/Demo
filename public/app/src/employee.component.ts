import {Component} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";


import {Employee} from "./employee";

@Component({
	selector:'employee',
    templateUrl:'../partials/employee.component.html',
    styleUrls:['../css/customer.component.css'],
})
export class EmployeeComponent{

	title:string ="Employee Form";
	employee:Employee;
	successMessage:string;
    errorMessage:string;


    constructor(private http:Http) {
        this.employee = new Employee(1,"");
    }

    addEmployee() {
        console.log("Inside addCustomer()!!!!");
        console.log(this.employee.id + " , " + this.employee.name);
        let addUrl = "/employee/create/" + this.employee.id  + "/" + this.employee.name;

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        //this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.employee, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.errorMessage=""
            },
            error => {
                this.errorMessage = <any>error;
                this.successMessage = ""
            });
    }
}
