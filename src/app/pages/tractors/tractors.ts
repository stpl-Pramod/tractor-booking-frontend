import { Component } from '@angular/core';
import { Tractor } from '../../core/services/tractor';
import {MatTableModule} from '@angular/material/table';
import { NgClass } from '@angular/common';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }



@Component({
  selector: 'app-tractors',
  imports: [MatTableModule, NgClass],
  templateUrl: './tractors.html',
  styleUrl: './tractors.scss'
})
export class Tractors {
  displayedColumns: string[] = ['tractor_id', 'owner', 'brand', 'model', 'year', 'location', 'price_per_day', 'status'];
  dataSource :any;

  constructor(private tractorApi:Tractor){

  }
  ngOnInit() {
  this.getTractors();
  }
  
  getTractors(){
  this.tractorApi.getAll().subscribe({
      next: (res:any) => {
        console.log('Tractors22:', res);
        this.dataSource = res;
      },
      error: (err:any) => console.error('Error222:', err)
    });
  }
}
