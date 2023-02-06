import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serviceURL: string;
  constructor(private http : HttpClient) {
    this.serviceURL = 'http://localhost:4200/'
  }

  // addItem() : Observable<>{}
}
