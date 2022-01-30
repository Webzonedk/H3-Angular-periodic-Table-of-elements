import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Element } from '../interfaces/element';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {

//Used to get a json array from dataService
  public elements$: BehaviorSubject<Element[]> = new BehaviorSubject<Element[]>([]);

//Getting the element to view from the element table
  public editElementToDisplay: any = [];
  public subject = new Subject<any>();
  private elementToViewDetails$ = new BehaviorSubject(this.editElementToDisplay);
  displayingElement$ = this.elementToViewDetails$.asObservable();


  constructor(private dataService: DataService) {


  }

  //Getting data from dataService and sends it to element table
  getData() {
    let countElements;
    this.dataService.getElements().subscribe((elements: Element[]) => {
      next:
      countElements = elements
      complete:
      this.elements$.next(countElements);
      // this.elements$ = element;
    });
  };


//Getting the element to view from the element table
  sendElementToView(elementToView: Element) {
    this.elementToViewDetails$.next(elementToView)
  }


}
