import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationPage } from '../location-page.class';
import * as arizonaJson from '../../image-json/arizona';

@Component({
  selector: 'app-arizona',
  templateUrl: './arizona.component.html',
  styleUrls: ['./arizona.component.scss']
})
export class ArizonaComponent extends LocationPage implements OnInit {

  thisUrl = "arizona";
  prevTitle = "puerto vallarta";
  prevUrl = "puerto-vallarta";
  // nextTitle = "utah";
  // nextUrl = "utah";


  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
   }

   ngOnInit(): void {
    this.imageObjects = arizonaJson.default;
    this.locationPageInit();
  }
}
