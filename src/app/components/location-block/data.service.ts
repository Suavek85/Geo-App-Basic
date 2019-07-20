import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { User } from './data.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

apiURL = `http://dev.virtualearth.net/REST/v1/Locations?query='London'
&key=AjF525jJkMH_mNXo4Aov0_S_jIAYZubFnMxP3AIg4jMkjaqpWL4Hz9SG6BMDUESC`;
usersUpdated = new Subject();

constructor(private _http: HttpClient) { }

//getUsers() {
// return this._http.get<User[]>(this.apiURL)
//}

sendLocation(data) {
  this.apiURL = `http://dev.virtualearth.net/REST/v1/Locations?query=${data}
  &key=AjF525jJkMH_mNXo4Aov0_S_jIAYZubFnMxP3AIg4jMkjaqpWL4Hz9SG6BMDUESC`;
  this.usersUpdated.next()
}

}
