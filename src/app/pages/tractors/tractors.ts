import { Component } from '@angular/core';
import { Tractor } from '../../core/services/tractor';

@Component({
  selector: 'app-tractors',
  imports: [],
  templateUrl: './tractors.html',
  styleUrl: './tractors.scss'
})
export class Tractors {

  constructor(private tractorApi:Tractor){

  }
  ngOnInit() {
  this.getTractors();
  }
  
  getTractors(){
  this.tractorApi.getAll().subscribe({
      next: (res:any) => console.log('Tractors22:', res),
      error: (err:any) => console.error('Error222:', err)
    });
  }
}
