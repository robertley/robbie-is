import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationPage } from '../location-page.class';
import * as minneapolisJson from '../../image-json/minneapolis'


@Component({
  selector: 'app-minneapolis',
  templateUrl: './minneapolis.component.html',
  styleUrls: ['./minneapolis.component.scss']
})
export class MinneapolisComponent extends LocationPage implements OnInit {

  thisUrl = "minneapolis";
  prevTitle = "chicago";
  prevUrl = "chicago";
  nextTitle = "badlands";
  nextUrl = "badlands";


  constructor(router: Router, route: ActivatedRoute) {
    super(router, route);
   }

   ngOnInit(): void {
    this.imageObjects = minneapolisJson.default;

    this.locationPageInit();
  }

}
