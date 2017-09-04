import {Component} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";
import {Router} from "@angular/router"


@Component({
	selector:'bookAppointment',
    templateUrl:'../partials/bookAppointment.html',
    styleUrls:['../css/buy.css'],
})
export class BookAppointmentComponent{
	title:string ="BookAppointment"

    constructor(private http:Http,private router:Router) {

    }

    goHome(){
        this.router.navigate(["home"]);
    }

}
