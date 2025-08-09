import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { Menu } from '../../components/menu/menu';
import MapStyle from './mapStyle';

@Component({
  selector: 'app-map',
  imports: [GoogleMapsModule, Menu],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class Map {
  mapCenter = { lat: 34.0522, lng: -118.2437 }; // Example: Los Angeles coordinates
  mapZoom = 10;
  mapOptions: google.maps.MapOptions = {
    styles: MapStyle.darkMapStyle,
    disableDefaultUI: true,
    zoomControl: true,
  };

  constructor() {
  }
}
