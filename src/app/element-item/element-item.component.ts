import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HandleDataService } from '../services/handle-data.service';
import { Element } from './../interfaces/element';


@Component({
  selector: 'app-element-item',
  templateUrl: './element-item.component.html',
  styleUrls: ['./element-item.component.css']
})
export class ElementItemComponent implements OnInit {
elementToViewArray: Element[] = [];


  constructor(private handleDataService: HandleDataService) {

  }


  ngOnInit(): void {
    this.handleDataService.displayingElement$.subscribe((elementToView$: any) =>
       (this.elementToViewArray[0]= elementToView$)); //<= Always get current value!
  }






}
