import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationPage } from '../location-page.class';
import * as oregonJson from '../../image-json/orgeon';

@Component({
  selector: 'app-oregon',
  templateUrl: './oregon.component.html',
  styleUrls: ['./oregon.component.scss']
})
export class OregonComponent extends LocationPage implements OnInit {

  thisUrl = "oregon";
  prevTitle = "idaho";
  prevUrl = "idaho";
  nextTitle = "crescent city/redwoods";
  nextUrl = "redwoods";


  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
   }

   ngOnInit(): void {
    this.imageObjects = oregonJson.default;

    this.locationPageInit();
  }

}
