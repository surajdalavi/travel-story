import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  selectedvalue: string;
  
  change= true;
    constructor() { }
  
    ngOnInit() {}
  
    onSelectChange() {
      this.change= this.selectedvalue !== undefined ? false:true;
    }
  
  }