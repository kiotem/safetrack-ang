import { Injectable } from '@angular/core';
import Vehicle from '../../models/Vehicle';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL, httpOptions } from '../../../commons/enviroments';
import { UserService } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicles: Vehicle[] = [];

  constructor(private http: HttpClient) 
  {

  }

  clearVehicles(): void {
    this.vehicles = [];
  }

  addVehicle(vehicle: Vehicle): void {
    this.vehicles.push(vehicle);
  }

  getVehicles(): Vehicle[] {
    return this.vehicles;
  }

  getVehicleById(objectId: string): Vehicle | undefined {
    return this.vehicles.find(vehicle => vehicle.objectId === objectId);
  }

  updateVehicle(objectId: string, updatedVehicle: Partial<Vehicle>): void {
    const vehicle = this.getVehicleById(objectId);
    if (vehicle) {
      Object.assign(vehicle, updatedVehicle);
    }
  }

  removeVehicle(objectId: string): void {
    this.vehicles = this.vehicles.filter(vehicle => vehicle.objectId !== objectId);
  }

  fillVehicles(data: any[]){
    this.vehicles = [];

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

            time: this.convertTimeToLocal(position.fixTime),
            speed: position.speed,
            latitude: position.latitude,
            longitude: position.longitude,
            odometer: attributes.odometer,
            ignition: attributes.ignition

          };

          console.log('Adding vehicle:', vehicle);
          this.vehicles.push(vehicle);
          //this.addVehicle(vehicle);
        }
      }
    }
  }

  convertTimeToLocal(time: string): string {
    const date = new Date(time);
    return date.toLocaleString();
  }

  downloadVehicles(data: any, sessionToken: string) 
  {
      console.log('download Vehicles method called Header: '+JSON.stringify(httpOptions));

      let httpOptionsUser = {
      headers: new HttpHeaders({
        'X-Parse-Application-Id': 'NDIFx8hdu3ZLZbB6tUq3au06HmqrhuKkEZ72EVwR',
        'X-Parse-REST-API-Key': 'deWxXGwOYr6ena7rovZkoLgrDtZhaw9w3cFsA4s1',
        'X-Parse-Revocable-Session': '1',
        'Content-Type': 'application/json',
        'X-Parse-Session-Token': sessionToken
      })
    };

      return this.http.post<any>(API_URL+'functions/getVehiclesByVendor', data, httpOptionsUser);
  }
  
}
