import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationPage } from '../location-page.class';
import * as idahoJson from '../../image-json/idaho';

@Component({
  selector: 'app-idaho',
  templateUrl: './idaho.component.html',
  styleUrls: ['./idaho.component.scss']
})
export class IdahoComponent extends LocationPage implements OnInit {

  thisUrl = "idaho";
  prevTitle = "badlands";
  prevUrl = "badlands";
  nextTitle = "oregon";
  nextUrl = "oregon";


  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
   }

   ngOnInit(): void {
    this.imageObjects = idahoJson.default;

    this.locationPageInit();
  }
}
