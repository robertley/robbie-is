import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationPage } from '../location-page.class';
import * as badlandsJson from '../../image-json/badlands'

@Component({
  selector: 'app-badlands',
  templateUrl: './badlands.component.html',
  styleUrls: ['./badlands.component.scss']
})
export class BadlandsComponent extends LocationPage implements OnInit {

  thisUrl = "badlands";
  prevTitle = "minneapolis";
  prevUrl = "minneapolis";
  nextTitle = "idaho";
  nextUrl = "idaho";


  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
   }

   ngOnInit(): void {
    this.imageObjects = badlandsJson.default;

    this.locationPageInit();
  }

}
