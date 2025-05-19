import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  template: `
    <div *ngFor="let hotel of hotels" class="card">
      <h2>{{ hotel.name }}</h2>
      <p>Ubicación: {{ hotel.location }}</p>
      <p>Precio: {{ hotel.price }}€/noche</p>
      <p>Valoración: {{ hotel.rating }}⭐</p>
      <button>Reservar</button>
    </div>
  `,
  styles: [`
    .card { background: white; margin: 10px; padding: 10px; border-radius: 8px; }
  `]
})
export class HotelListComponent {
  hotels = [
    { name: 'Hotel Sol', location: 'Madrid', price: 120, rating: 4.5 },
    { name: 'Hotel Luna', location: 'Barcelona', price: 95, rating: 4.2 }
  ];
}