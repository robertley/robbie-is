import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationPage } from '../location-page.class';
import * as puertoVallartaJson from '../../image-json/puerto-vallarta'

@Component({
  selector: 'app-puerto-vallarta',
  templateUrl: './puerto-vallarta.component.html',
  styleUrls: ['./puerto-vallarta.component.scss']
})
export class PuertoVallartaComponent extends LocationPage implements OnInit {

  thisUrl = "puerto-vallarta";
  prevTitle = "twentynine palms";
  prevUrl = "29-palms";
  nextTitle = "arizona";
  nextUrl = "arizona";


  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
   }

   ngOnInit(): void {
    this.imageObjects = puertoVallartaJson.default;
    this.locationPageInit();
  }
}
