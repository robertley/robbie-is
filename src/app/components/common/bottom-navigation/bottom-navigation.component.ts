import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss']
})
export class BottomNavigationComponent implements OnInit {

  @Input()
  config: BottomNavigationConfig

  constructor() { }

  ngOnInit(): void {
  }

  get leftNav() {
    return this.config.leftNav();
  }

  get rightNav() {
    return this.config.rightNav();
  }


}

export interface BottomNavigationConfig {
  leftNav: () => NavConfig | null;
  rightNav: () => NavConfig | null;
}

export interface NavConfig {
  text: string;
  url: string;
}