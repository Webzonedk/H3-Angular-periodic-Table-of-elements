import { Component, OnInit } from '@angular/core';
import { Element } from '../interfaces/element';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-element-table',
  templateUrl: './element-table.component.html',
  styleUrls: ['./element-table.component.css']
})
export class ElementTableComponent implements OnInit {
  elements: Element[] = [];
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    //Getting the elements from the API throught the dataService
    // this.dataService.getElements().subscribe((element: Element[]) => {
    //   next: this.elements = element;
    //   for (let i = 0; i < this.elements.length; i++) {
    //     console.log(`content of elements in elementTable 1: ${this.elements[i].meltingPoint}`);
this.getData();
    //   }
    // });
  }

  getData(){
    //Getting the elements from the API throught the dataService
    this.dataService.getElements().subscribe((element: Element[]) => {
      next: this.elements = element;
      // for (let i = 0; i < this.elements.length; i++) {
      //   console.log(`content of elements in elementTable 1: ${this.elements[i].}`);
      // }
    });
  }


}
