import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-status',
  template: `
    <h3>Mis Reservas</h3>
    <ul>
      <li *ngFor="let b of bookings">{{ b.hotel }} - Estado: {{ b.status }}</li>
    </ul>
  `
})
export class BookingStatusComponent {
  bookings = [
    { hotel: 'Hotel Sol', status: 'Confirmada' },
    { hotel: 'Hotel Luna', status: 'Pendiente' }
  ];
}