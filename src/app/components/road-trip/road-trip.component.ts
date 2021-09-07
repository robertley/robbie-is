import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-road-trip',
  templateUrl: './road-trip.component.html',
  styleUrls: ['./road-trip.component.scss']
})
export class RoadTripComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(route: string) {
    this.router.navigate([route], { relativeTo: this.route })
  }

  comingSoon(navElem: any) {
    console.log(navElem)
  }
}
