import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Element } from '../interfaces/element';


@Injectable({
  providedIn: 'root'
})

export class DataService {
 // apiUrl: string = "https://periodic-table-elements-info.herokuapp.com/elements";
  localJson: string = `./assets/data/elements.json`;




  constructor(private http: HttpClient) {

  }

  //Getting the data from the API
  getElements(): Observable<Element[]> {
    return this.http.get<Element[]>(this.localJson);
  }


}

