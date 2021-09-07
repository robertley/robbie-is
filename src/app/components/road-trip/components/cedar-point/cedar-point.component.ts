import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as cedarPointJson from '../../image-json/cedar-point';
import { LocationPage } from '../location-page.class';


@Component({
  selector: 'app-cedar-point',
  templateUrl: './cedar-point.component.html',
  styleUrls: ['./cedar-point.component.scss']
})
export class CedarPointComponent extends LocationPage implements OnInit {

  thisUrl = "cedar-point";
  nextTitle = "chicago";
  nextUrl = "chicago";

  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }


  ngOnInit(): void {
    this.imageObjects = cedarPointJson.default;

    this.locationPageInit();
  }

}
