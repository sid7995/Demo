import {Component} from "@angular/core";
import { Router } from '@angular/router';
import { Http,RequestOptions,Headers} from '@angular/http';
import { Politician } from './politician';


@Component({
	selector:'politician',
    template:`<div>
        <h1>{{title}}</h1>
        <input type="button" value="Load Data" (click)="fetchData();" />
        <table>
            <tbody>
                <tr *ngFor="let politician of politicians">
                    <td>{{politician.id}}</td>
                    <td>{{politician.name}}</td>
                    <td>{{politician.frauds}}</td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class PoliticianComponent{

	title:string ="Politician List";
	politicians:Politician[];

    constructor(private http:Http){}

    fetchData(){
        let requestHeaders = new Headers({'Accept':'application/json'});
        let requestOptions = new RequestOptions({headers:requestHeaders});
        this.http.get("/rest/politicians",requestOptions)
            .subscribe((res)=>{ this.politicians = res.json()});
    }
}
