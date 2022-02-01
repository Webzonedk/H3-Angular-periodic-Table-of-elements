import { Element } from '../interfaces/element';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiUrl: string = "http://localhost:3000";
  localJson: string = `./assets/data/elements.json`;//using a local json due to errors in the first API that I tried to use, so I build my own instead.


  constructor(private http: HttpClient) { }

  //Getting the data from the API or alternative from a local json file
  getElements(): Observable<Element[]> {

    return this.http.get<Element[]>(this.apiUrl+`/getElements`); //Api get
    // return this.http.get<Element[]>(this.localJson);   //Local file get
  }


}

