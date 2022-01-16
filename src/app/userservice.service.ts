import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {PeriodicElement} from './PeriodicElement'
import { from, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { 

  }

  getData() : Observable<PeriodicElement[]>
  {
     //let url = 'https://jsonplaceholder.typicode.com/posts';
     let url = 'http://localhost:8080/user/allusersWithProfiles';
     
     return this.http.get<PeriodicElement[]>(url);

  }
}
