import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MasterService } from '../../core/services/master-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookings',
  imports: [ MatTableModule, CommonModule
    ],
  templateUrl: './bookings.html',
  styleUrl: './bookings.scss'
})
export class Bookings  implements OnInit {
   displayedColumns: string[] = [
    'booking_id',
    'tractor_id',
    'user_id',
    'booking_date',
    'start_date',
    'end_date',
    'booking_method',
    'status'
  ];

  dataSource: any[] = [];
  constructor(private masterService : MasterService){}
  ngOnInit(): void{
    this.masterService.getBookings().subscribe((data:any)=>{
      this.dataSource = data;
      console.log(this.dataSource);
      console.log("sfdfds");
    })
    // console.log("2sfdfds")
  }

}
