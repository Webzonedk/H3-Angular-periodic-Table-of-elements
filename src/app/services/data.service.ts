import { Element } from '../interfaces/element';
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: string = "https://periodic-table-elements-info.herokuapp.com/elements";
  elements: Element[] = [];



  constructor(private http: HttpClient) {
   // this.elements = [];
  }

//Getting the data from the API
  getElements(): Observable<Element[]> {
      return this.http.get<Element[]>(this.apiUrl);
  }

  getDictatorsArray() {
    return this.elements.slice();
  }


}

