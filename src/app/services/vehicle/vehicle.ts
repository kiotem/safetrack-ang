import { Injectable } from '@angular/core';
import Vehicle from '../../models/Vehicle';
import { HttpClient } from '@angular/common/http';
import { API_URL, httpOptions } from '../../../commons/enviroments';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehicles: Vehicle[] = [];

  constructor(private http: HttpClient) {}

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

  downloadVehicles(data: any) 
  {
        console.log('download Vehicles method called');
        httpOptions.headers.append('Content-Type', 'application/json');
        httpOptions.headers.append('X-Parse-Session-Token', '<session-token>');
        return this.http.post<any>(API_URL+'functions/downloadVehicles', data, httpOptions);
  }
  
}
