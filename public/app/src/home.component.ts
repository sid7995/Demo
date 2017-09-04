import {Component, OnInit} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Router} from "@angular/router"

@Component({
	selector:'home',
    styleUrls:['../css/home.component.css'],
    templateUrl:'../partials/home.html',
})
export class HomeComponent implements OnInit {

    title:string = "Home Page";
    cars:any;

    constructor(private http:Http,private router:Router) {

    }
  ngOnInit() {
        let requestHeaders = new Headers({'Accept': 'application/json'});
        let requestOptions = new RequestOptions({headers: requestHeaders});
        this.http.get("/car/all", requestOptions)
            .subscribe((res)=> {
                this.cars = res.json()
            });
    }

    shopkeeperLogin() {
        this.router.navigate(["shopkeeperLogin"]);
    }
    selectProduct(){
        this.router.navigate(["selectProduct"])
    }
}