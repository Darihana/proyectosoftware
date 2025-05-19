import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="text-center">BreazeInTheMoon - Sistema de Reservas</h1>
    <button (click)="role='client'">Cliente</button>
    <button (click)="role='admin'">Hotel</button>
    <div *ngIf="role==='client'">
      <app-hotel-list></app-hotel-list>
      <app-booking-status></app-booking-status>
    </div>
    <div *ngIf="role==='admin'">
      <app-admin-panel></app-admin-panel>
    </div>
  `,
  styles: [`
    h1 { text-align: center; margin: 20px 0; }
    button { margin: 0 10px; }
  `]
})
export class AppComponent {
  role: 'client' | 'admin' = 'client';
}