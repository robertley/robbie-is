import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationPage } from '../location-page.class';
import * as utahJson from '../../image-json/utah'

@Component({
  selector: 'app-utah',
  templateUrl: './utah.component.html',
  styleUrls: ['./utah.component.scss']
})
export class UtahComponent  extends LocationPage implements OnInit {

  thisUrl = "utah";
  prevTitle = "arizona";
  prevUrl = "arizona";
  // nextTitle = "utah";
  // nextUrl = "utah";


  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
   }

   ngOnInit(): void {
    this.imageObjects = utahJson.default;
    this.locationPageInit();
  }
}
