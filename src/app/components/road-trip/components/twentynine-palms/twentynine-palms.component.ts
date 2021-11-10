import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationPage } from '../location-page.class';
import * as twentyninePalmsJson from '../../image-json/twentynine-palms'

@Component({
  selector: 'app-twentynine-palms',
  templateUrl: './twentynine-palms.component.html',
  styleUrls: ['./twentynine-palms.component.scss']
})
export class TwentyninePalmsComponent extends LocationPage implements OnInit {

  thisUrl = "29-palms";
  prevTitle = "bay area";
  prevUrl = "bay-area";
  nextTitle = "puerto vallarta";
  nextUrl = "puerto-vallarta";


  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
   }

   ngOnInit(): void {
    this.imageObjects = twentyninePalmsJson.default;
    this.locationPageInit();
  }

}
