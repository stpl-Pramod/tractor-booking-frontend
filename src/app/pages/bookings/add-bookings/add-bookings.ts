import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from '../../../core/services/master-service';
import { Bookings } from '../bookings';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-bookings',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, MatDialogModule, MatButtonModule],
  templateUrl: './add-bookings.html',
  styleUrl: './add-bookings.scss'
})
export class AddBookings {
bookingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private masterService: MasterService,
    private dialogRef: MatDialogRef<Bookings>
  ) {
    this.bookingForm = this.fb.group({
      tractor_id: ['', Validators.required],
      user_id: ['', Validators.required],
      booking_date: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      booking_method: ['', Validators.required],
      status: ['pending']
    });
  }

  onSave() {
    if (this.bookingForm.valid) {
      this.masterService.addBooking(this.bookingForm.value).subscribe(() => {
        this.dialogRef.close('saved');
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
