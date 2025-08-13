import { Component, input } from '@angular/core';
import Vehicle from '../../models/Vehicle';

@Component({
  selector: 'app-vehicle-card',
  imports: [],
  templateUrl: './vehicle-card.html',
  styleUrl: './vehicle-card.css'
})
export class VehicleCard {
  vehicle = input <Vehicle>();

  constructor() {
    //this.vehicle = new Vehicle();
  }
}
