import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as chicagoJson from '../../image-json/chicago'
import { LocationPage } from '../location-page.class';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.scss']
})
export class ChicagoComponent extends LocationPage implements OnInit {

  thisUrl = "chicago";
  prevTitle = "cedar point";
  prevUrl = "cedar-point";
  nextUrl = "minneapolis";

  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
  }

  ngOnInit(): void {
    this.imageObjects = chicagoJson.default;

    this.locationPageInit();
  }

}
