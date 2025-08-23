import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MasterService } from '../../core/services/master-service';
import { CommonModule } from '@angular/common';
import { AddBookings } from './add-bookings/add-bookings';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bookings',
  imports: [ MatTableModule, CommonModule, MatButtonModule],
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
  constructor(private masterService : MasterService, private dialog: MatDialog){}
  ngOnInit(): void{
    this.masterService.getBookings().subscribe((data:any)=>{
      this.dataSource = data;
      console.log(this.dataSource);
      console.log("sfdfds");
    })
     this.loadBookings();
    // console.log("2sfdfds")
  }
loadBookings() {
    this.masterService.getBookings().subscribe((data) => {
      this.dataSource = data;
    });
  }

  openAddBookingDialog(): void {
    const dialogRef = this.dialog.open(AddBookings, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if (result === 'saved') {
        this.loadBookings(); // refresh table
      }
    });
  }
}
