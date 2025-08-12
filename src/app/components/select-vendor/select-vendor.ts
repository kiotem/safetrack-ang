import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Vendor from '../../models/Vendor';
import { Router } from '@angular/router';
import { VendorCard } from '../vendor-card/vendor-card';

@Component({
  selector: 'app-select-vendor',
  imports: [VendorCard],
  templateUrl: './select-vendor.html',
  styleUrl: './select-vendor.css'
})

export class SelectVendor implements OnInit {
  selectedVendor: Vendor | undefined;
  //@Output() eventFromSelectVendor: EventEmitter<any> = new EventEmitter<any>();
  vendors: Vendor[];

  constructor(public router: Router) {
    // Initialization logic for the select vendor component
    this.vendors = [];
  }

  ngOnInit() {
    this.loadVendors();

let tempSelectedVendor = sessionStorage.getItem('selectedVendor');

    console.log('Temp Selected Vendor from sessionStorage:', tempSelectedVendor);
    if(tempSelectedVendor)
    {
      this.selectedVendor = JSON.parse(tempSelectedVendor);
      console.log('Selected Vendor on Map:', this.selectedVendor);

       let panel = document.getElementById('vendor-selector');
      console.log('Panel:', panel);
      if (panel) 
      {
        panel.style.display = 'none';
      }
    }else
    {
      this.selectedVendor = undefined;

      console.log('No vendor selected, showing vendor selector');
      let panel = document.getElementById('vendor-selector');
      console.log('Panel:', panel);
      if (panel) {
        panel.style.display = 'block';
      }
    }

  }

  loadVendors()
  {
      let vendorsText = sessionStorage.getItem('vendorsList');
      if (vendorsText) {
          this.vendors = JSON.parse(vendorsText);
          // Do something with the vendors data
          console.log('Select Vendors:', this.vendors);
      }
  }


  closeSelector() {
    // Logic to close the vendor selection panel
    if(!sessionStorage.getItem('selectedVendor'))
    {
      alert('Debe seleccionar una operación para continuar');
      this.router.navigate(['login']);
    }else{
      let panel = document.getElementById('vendor-selector');
      if (panel) {
        panel.style.display = 'none';
      }
    }


  }

  openSelector() {
    // Logic to open the vendor selection panel
    let panel = document.getElementById('vendor-selector');
    if (panel) {
      panel.style.display = 'block';
    }
  }
}
