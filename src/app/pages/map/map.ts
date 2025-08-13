import { ChangeDetectorRef, Component, OnInit, viewChild } from '@angular/core';
import { GoogleMap, MapAdvancedMarker, MapMarker } from '@angular/google-maps';
import { Menu } from '../../components/menu/menu';
import { SelectVendor } from '../../components/select-vendor/select-vendor';
import { Router } from '@angular/router';
import { VendorService } from '../../services/vendor';
import { VehicleCard } from '../../components/vehicle-card/vehicle-card';
import Vehicle from '../../models/Vehicle';
import { VehicleService } from '../../services/vehicle/vehicle';
import { UserService } from '../../services/user/user';
import User from '../../models/User';
import Vendor from '../../models/Vendor';

interface Marker {
      position: google.maps.LatLngLiteral;
      title: string;
      icon: { url: string;};
      infoWindowContent?: string;
    }
    
@Component({
  selector: 'app-map',
  imports: [GoogleMap, Menu, MapAdvancedMarker, SelectVendor, VehicleCard],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class Map implements OnInit
{   
  markers: Marker[];
  user: User | undefined;
  vendor: Vendor;

  center: google.maps.LatLngLiteral = { lat: 19.4326, lng: -99.1332 };
  zoom = 4;

  mapOptions: google.maps.MapOptions = 
  {
    zoomControl: false,
    streetViewControl: true,
    fullscreenControl: false,
    mapTypeControl: false,
    mapId: '7f656e587f4e86ae627f4c40'
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

  centerMap(v: Vehicle)
  {
    this.mapReference().panTo({ lat: v.latitude, lng: v.longitude });
  }

  ngOnInit(): void {
    
    console.log('Map component initializeddd');
    this.vendor = this.vendorService.getSelectedVendor();

    let tempUser = sessionStorage.getItem('user');
    console.log('User inMap user data:', tempUser);
    this.user = JSON.parse(tempUser || '{}') as User;

    console.log('User Name in Map:', this.user.name);

    this.downloadVehicles();
  }

  constructor(private router: Router, private vendorService: VendorService, public vehicleService: VehicleService, public userService: UserService, public cdr: ChangeDetectorRef) { 
    this.markers = [];
    this.vendor = {objectId: '', name: ''};
    this.user = undefined;

    /*
    this.vendor = this.vendorService.getSelectedVendor();

    let tempUser = sessionStorage.getItem('user');
    console.log('User inMap user data:', tempUser);
    this.user = JSON.parse(tempUser || '{}') as User;

    console.log('User Name in Map:', this.user.name);
    */
  }

  downloadVehicles() {

    if(this.vendor.objectId != '')
    {
      const data = {
        vendor: this.vendor.objectId,
        userId: this.user?.objectId
      };

      this.vehicleService.downloadVehicles(data, this.user!.sessionToken).subscribe({
        next: (response) => {
          console.log('Vehicles downloaded successfully:', response);

          this.vehicleService.fillVehicles(response.result);
          //console.log('Vehicles after clearData:', this.vehicles);
         // this.vehicles = response.vehicles; // Assuming the response contains an array of vehicles

          this.cdr.detectChanges();
        },
        error: (error) => 
        {
          console.error('Error downloading vehicles:', error);
        }
      });
    }

  }

  /*
  clearData(data: any[] | undefined): Vehicle[]
  {
    let response: Vehicle[] = [];

    this.vehicleService.clearVehicles();

    if(data)
    {
      let size = data.length;

      for(let i = 0; i < size; i++)
      {

        if(data[i].lastEventPosition != null)
        {
          let item = data[i];
          let position = item.lastEventPosition.position;
          let device = item.lastEventPosition.device;

          let attributes = position.attributes;

          let vehicle: Vehicle = {
            objectId: item.objectId,
            brand: item.brand,
            plateNumber: item.plateNumber,
            pmsId: item.pmsId,

            time: position.fixTime,
            speed: position.speed,
            latitude: position.latitude,
            longitude: position.longitude,
            odometer: attributes.odometer,
            ignition: attributes.ignition

          };
          //response.push(vehicle);
          this.vehicleService.addVehicle(vehicle);
        }
      }
    }

    return response;
  }
  */
}