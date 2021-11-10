import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationPage } from '../location-page.class';
import * as bayAreaJson from '../../image-json/bay-area';

@Component({
  selector: 'app-bay-area',
  templateUrl: './bay-area.component.html',
  styleUrls: ['./bay-area.component.scss']
})
export class BayAreaComponent extends LocationPage implements OnInit {

  thisUrl = "bay-area";
  prevTitle = "crescent city/redwoods";
  prevUrl = "redwoods";
  nextTitle = "twentynine palms";
  nextUrl = "29-palms";


  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
   }

   ngOnInit(): void {
    this.imageObjects = bayAreaJson.default;
    this.locationPageInit();
  }

}
