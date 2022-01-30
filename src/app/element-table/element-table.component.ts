import { Element } from './../interfaces/element';
import { Component, OnInit } from '@angular/core';
import { HandleDataService } from '../services/handle-data.service';

@Component({
  selector: 'app-element-table',
  templateUrl: './element-table.component.html',
  styleUrls: ['./element-table.component.css']
})

export class ElementTableComponent implements OnInit {

  elements: Element[] = [];

  dummyElement: Element = {
    name: "0",
    appearance: "0",
    atomic_mass: 0,
    boil: 0,
    category: "0",
    density: 0,
    discovered_by: "0",
    melt: 0,
    molar_heat: 0,
    named_by: "0",
    number: 0,
    period: 0,
    phase: "0",
    source: "0",
    spectral_imghttps: "0",
    summary: "0",
    symbol: "0",
    xpos: 0,
    ypos: 0,
    shells: "0",
    electron_configuration: "0",
    electron_configuration_semantic: "0",
    electron_affinity: 0,
    electronegativity_pauling: 0,
    ionization_energies: "0",
    cpk_hex: "0"
  };

  gridArray: any = [];
  isReady: boolean = false;
  show: boolean = false;

  constructor(private handleDataService: HandleDataService) {
    this.handleDataService.elements$.subscribe((elementsData: Element[]) => {
      next:
      if (this.elements.length !== elementsData.length) {
        this.elements = elementsData;
        this.loadElements();
      }
    })
  }

  ngOnInit(): void {

    this.loadElements();

    setTimeout(() => {
      this.calculateGrid();
      console.log(this.elements);
    }, 10);
    // console.log(this.elements);

  }




  loadElements() {
    this.handleDataService.getData();
  }




  calculateGrid(): void {
    const row: number = 10, col: number = 18, elements = this.elements.length;
    //iterating through rows
    for (let i = 0; i < row; i++) {
      this.gridArray[i] = [];
      //iterating through cols filling all with dummy data
      for (let j = 0; j < col; j++) {

        // iterating through the array og elements ,to place them at the right indexes
        for (let k = 0; k < elements; k++) {
          if ((this.elements[k].ypos !== (i + 1)) && (this.elements[k].xpos !== (j + 1))) {
            this.gridArray[i][j] = this.dummyElement;
          }
        }
      }
      //iterating through cols, filling relevant boxes with element data
      for (let j = 0; j < col; j++) {

        // iterating through the array og elements ,to place them at the right indexes
        for (let k = 0; k < elements; k++) {
          if ((this.elements[k].ypos == (i + 1)) && (this.elements[k].xpos == (j + 1))) {
            this.gridArray[i][j] = this.elements[k];
          }
        }
      }
      // console.log(this.gridArray[i]);
    }
  }



}
