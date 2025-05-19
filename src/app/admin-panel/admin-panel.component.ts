import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  template: `
    <h2>Panel del Hotel</h2>
    <button>Añadir habitación</button>
    <div *ngFor="let room of rooms" class="room-card">
      <p>Tipo: {{ room.type }}</p>
      <p>Precio: {{ room.price }}€</p>
      <p>Disponible: {{ room.available ? 'Sí' : 'No' }}</p>
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  `,
  styles: [`
    .room-card { background: white; margin: 10px; padding: 10px; border-radius: 8px; }
  `]
})
export class AdminPanelComponent {
  rooms = [
    { id: 1, type: 'Doble', price: 80, available: true },
    { id: 2, type: 'Suite', price: 150, available: false }
  ];
}