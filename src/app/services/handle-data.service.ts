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
  //temp array to hold the elements, before adding them to the gridArray
  countElements: any = [];
  //The grid array to send back
  gridArray$: any = [];

  //Dummy element, to fill 2d array before filling in real data.
  //Just as a placeholder, to avoid empty indexes
  dummyElement: Element = {
    name: "0", appearance: "0", atomic_mass: 0, boil: 0, category: "0", density: 0, discovered_by: "0",
    melt: 0, molar_heat: 0, named_by: "0", number: 0, period: 0, phase: "0", source: "0",
    spectral_imghttps: "0", summary: "0", symbol: "0", xpos: 0, ypos: 0, shells: "0", electron_configuration: "0",
    electron_configuration_semantic: "0", electron_affinity: 0, electronegativity_pauling: 0,
    ionization_energies: "0", cpk_hex: "0"
  };


  //the constructor is initializing the dataService
  constructor(private dataService: DataService) {

  }

  //Getting data from dataService and sends it to countElement array
  getData() {
    this.dataService.getElements().subscribe((elements: Element[]) => {
      next:
      this.countElements = elements;

      // on completion, it sends back the gridArray to the component
      complete:
      this.elements$.next(this.calculateGrid());
    });
  };


  //Getting the element to view from the element table
  sendElementToView(elementToView: Element) {
    this.elementToViewDetails$.next(elementToView)
  }


  // Calculating the 2D array to return to the component, filling it into gridArray[]
  calculateGrid(): Element[] {
    const row: number = 10, col: number = 18, elements = this.countElements.length;
    //iterating through rows
    for (let i = 0; i < row; i++) {
      this.gridArray$[i] = [];
      //iterating through cols filling all with dummy data
      for (let j = 0; j < col; j++) {

        // iterating through the array og elements ,to place them at the right indexes
        for (let k = 0; k < elements; k++) {
          if ((this.countElements[k].ypos !== (i + 1)) && (this.countElements[k].xpos !== (j + 1))) {
            this.gridArray$[i][j] = this.dummyElement;
          }
        }
      }
      //iterating through cols, filling relevant boxes with element data
      for (let j = 0; j < col; j++) {

        // iterating through the array og elements ,to place them at the right indexes
        for (let k = 0; k < elements; k++) {
          if ((this.countElements[k].ypos == (i + 1)) && (this.countElements[k].xpos == (j + 1))) {
            this.gridArray$[i][j] = this.countElements[k];
          }
        }
      }
      // console.log(this.gridArray[i]);
    }
    return this.gridArray$;
  }
}
