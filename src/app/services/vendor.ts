import { Injectable } from '@angular/core';
import Vendor from '../models/Vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  selectedVendor: Vendor;

  constructor() {
    this.selectedVendor = {
      objectId: '',      
    };
    this.loadSelectedVendor();
  }

  getSelectedVendor(): Vendor{
    return this.selectedVendor;
  }

  private loadSelectedVendor() {
    const vendorData = sessionStorage.getItem('selectedVendor');
    if (vendorData) {
      this.selectedVendor = JSON.parse(vendorData);
    }
  }

  setSelectedVendor(vendor: Vendor) {
    this.selectedVendor = vendor;
    sessionStorage.setItem('selectedVendor', JSON.stringify(vendor));
  }
}
