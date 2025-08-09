import { Component } from '@angular/core';
import { LoaderService } from '../../services/commons/loader';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.css'
})
export class Loader {
  constructor(public loaderService: LoaderService) {
    // Loader component initialization if needed
  }
}
