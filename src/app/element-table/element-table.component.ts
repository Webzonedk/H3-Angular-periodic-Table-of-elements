import { Element } from './../interfaces/element';
import { Component, OnInit, Output, Input } from '@angular/core';
import { HandleDataService } from '../services/handle-data.service';

@Component({
  selector: 'app-element-table',
  templateUrl: './element-table.component.html',
  styleUrls: ['./element-table.component.css']
})

export class ElementTableComponent implements OnInit {

  //Array with catagories
  boxHeader: string[] = ["Alkali Metal", "Alkaline Earth Metal", "Lanthanoids", "Actinoids", "Transition Metal", "Post-transition Metals", "Metalloids", "Other Nonmetal", "Noble Gasses", "Unknown"];
  //2DArray to keep the data to be destributed in the frontend
  gridArray: any = [];
  //boolean to use for showin element info
  showInfo: boolean = false;

  constructor(private handleDataService: HandleDataService) {

    this.handleDataService.elements$.subscribe((elementsData: Element[]) => {
      next:
      if (this.gridArray.length !== elementsData.length) {
        this.gridArray = elementsData;
      }
    })
  }


  ngOnInit(): void {
    //Getting tha data from the serviceHandler by running the loadElement method when the page is loaded
    this.loadElements();
  }


  //Getting tha data from the service handler
  loadElements() {
    this.handleDataService.getData();
  }


//Method to be usen from element-table.component.html to show the element properties
  viewElement(indexI: number, indexJ: number) {
    this.handleDataService.sendElementToView(this.gridArray[indexI][indexJ]);
    this.showInfo = true;
  }


  show(): boolean {
    this.showInfo = this.showInfo;
    return this.showInfo;
  }


}


