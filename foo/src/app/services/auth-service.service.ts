import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { BehaviorSubject,Observable } from "rxjs";
import { Http} from "@angular/http";
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'any'
})
export class AuthServiceService {
  messageEmitter = new EventEmitter<String|any>(); 
  
  constructor(private http: HttpClient,private router:Router) {

  }

   public getJSON(): Observable<any> {
    return this.http.get("./assets/data.json");
    }
}
