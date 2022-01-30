import { Element } from '../interfaces/element';
import { Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {
  // elements$: any[] = [];
  elements$: BehaviorSubject<Element[]> = new BehaviorSubject<Element[]>([]);


  constructor(private dataService: DataService) {

  }

  getData() {

    this.dataService.getElements().subscribe((element: Element[]) => {
      next:
      // this.elements$ = element;
      this.elements$.next(element);
    });
  };





}
