import { Component, input } from '@angular/core';
import Vendor from '../../models/Vendor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-card',
  imports: [],
  templateUrl: './vendor-card.html',
  styleUrl: './vendor-card.css'
})
export class VendorCard {
  vendor = input <Vendor>();

  constructor(public router: Router) {
    // Initialization logic for the vendor card component
  }

  changeVendor(vendor: Vendor | undefined) 
  {
    console.log('Selected Vendor:', vendor);
    sessionStorage.setItem('selectedVendor', JSON.stringify(vendor));

    window.location.reload();
    this.router.navigate(['map']);
  }

}
