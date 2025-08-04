import { Component } from '@angular/core';

@Component({
  selector: 'app-tractors',
  imports: [],
  templateUrl: './tractors.html',
  styleUrl: './tractors.scss'
})
export class Tractors {

  ngOnInit() {
  this.getTractors();
  }
  
  getTractors(){
    console.log("test");   
    
  }
}
