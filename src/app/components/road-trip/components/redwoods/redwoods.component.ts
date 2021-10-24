import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationPage } from '../location-page.class';
import * as redwoodsJson from '../../image-json/redwoods';

@Component({
  selector: 'app-redwoods',
  templateUrl: './redwoods.component.html',
  styleUrls: ['./redwoods.component.scss']
})
export class RedwoodsComponent extends LocationPage implements OnInit {

  thisUrl = "redwoods";
  prevTitle = "oregon";
  prevUrl = "oregon";
  // nextTitle = "badlands";
  // nextUrl = "badlands";


  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
   }

   ngOnInit(): void {
    this.imageObjects = redwoodsJson.default;
    this.locationPageInit();
  }
}
