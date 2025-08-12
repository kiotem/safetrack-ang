import { Component, OnInit, viewChild } from '@angular/core';
import { GoogleMap, MapAdvancedMarker, MapMarker } from '@angular/google-maps';
import { Menu } from '../../components/menu/menu';
import { SelectVendor } from '../../components/select-vendor/select-vendor';
import Vendor from '../../models/Vendor';
import { Router } from '@angular/router';
import { VendorService } from '../../services/vendor';
import MapStyle from './mapStyle';

// Import AdvancedMarkerElement from google.maps.marker

interface Marker {
      position: google.maps.LatLngLiteral;
      title: string;
      icon: { url: string;};
      infoWindowContent?: string;
    }

    export default interface Points{
      lat: number;
      lng: number;
      title: string;
    }

@Component({
  selector: 'app-map',
  imports: [GoogleMap, Menu, MapAdvancedMarker, SelectVendor],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class Map implements OnInit
{   
  markers: Marker[] = [];
  points: Points[] = [];

center: google.maps.LatLngLiteral = { lat: 19.4326, lng: -99.1332 };
  zoom = 4;

  mapOptions: google.maps.MapOptions = {
    zoomControl: false,
    streetViewControl: true,
    fullscreenControl: false,
    mapTypeControl: false,
    mapId: '7f656e587f4e86ae627f4c40',
    panControl: false
  };
  

  markerOptions: google.maps.marker.AdvancedMarkerElementOptions = {
    gmpDraggable: false,
    gmpClickable: true,

  };

  createImageAlert()
  {
    const image = '/imgs/markers/pin_car_1.png';
    let imageTag = document.createElement('img');
    imageTag.src = image;
    imageTag.width = 50;
    imageTag.height = 50;
    return imageTag;
  }

  private mapReference = viewChild.required<GoogleMap>(GoogleMap);

  setMarkerCenter(p: Points){
    this.mapReference().panTo({ lat: p.lat, lng: p.lng });
  }

  ngOnInit(): void {
    
    console.log('Map component initializeddd');

  }

  constructor(private router: Router, private vendorService: VendorService) { 
    this.markers = [];
    this.points = [];
    this.points.push({ lat: 19.4326, lng: -99.1332, title: 'Mexico City' });
    this.points.push({ lat: 34.0522, lng: -118.2437, title: 'Los Angeles' });
    this.points.push({ lat: 40.7128, lng: -74.0060, title: 'New York' });
    this.points.push({ lat: 41.8781, lng: -87.6298, title: 'Chicago' });
    this.points.push({ lat: 29.7604, lng: -95.3698, title: 'Houston' });
    this.points.push({ lat: 33.4484, lng: -112.0740, title: 'Phoenix' });
    this.points.push({ lat: 39.7392, lng: -104.9903, title: 'Denver' });
    this.points.push({ lat: 25.7617, lng: -80.1918, title: 'Miami' });
    this.points.push({ lat: 47.6062, lng: -122.3321, title: 'Seattle' });
    this.points.push({ lat: 32.7157, lng: -117.1611, title: 'San Diego' });
    this.points.push({ lat: 38.9072, lng: -77.0369, title: 'Washington D.C.' });
    this.points.push({ lat: 37.7749, lng: -122.4194, title: 'San Francisco' });
    this.points.push({ lat: 35.2271, lng: -80.8431, title: 'Charlotte' });
  }



}

