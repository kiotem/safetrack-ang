import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  visible: boolean;

  constructor() {
    this.visible = false;
  }

  show() {
    console.log('Loader is now visible');
    this.visible = true;
    const loaderComponent = document.getElementById('loader-component');
    if (loaderComponent) {
      loaderComponent.style.visibility = 'visible';
    }
  }

  hide() {
    console.log('Loader is now hidden');
     // Hide the loader
    this.visible = false;
    const loaderComponent = document.getElementById('loader-component');
    if (loaderComponent) {
      loaderComponent.style.visibility = 'hidden';
    }
  }
}
