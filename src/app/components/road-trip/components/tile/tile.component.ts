import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BottomNavigationConfig } from 'src/app/components/common/bottom-navigation/bottom-navigation.component';

import * as cedarPointJson from '../../image-json/cedar-point';
import * as chicagoJson from '../../image-json/chicago';
import * as minneapolisJson from '../../image-json/minneapolis';
import * as badlandsJson from '../../image-json/badlands';
import * as idahoJson from '../../image-json/idaho';
import * as oregonJson from '../../image-json/orgeon';
import * as redwoodsJson from '../../image-json/redwoods';
import * as bayAreaJson from '../../image-json/bay-area';
import * as twentyninePalmsJson from '../../image-json/twentynine-palms';
import * as puertoVallartaJson from '../../image-json/puerto-vallarta';
import { PhotoDialogComponent } from '../photo-dialog/photo-dialog.component';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  imageObjects: ImageObj[] = [];
  selectedImage: ImageObj | null = null;

  itemsPerPage = 12;
  pageNumber = 1;
  totalPages = 1;

  visibleImageObjects: ImageObj[];

  bottomNavConfig: BottomNavigationConfig;

  loaded = false;

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    console.log(this.route)
    this.route.params.subscribe(params => {
      if (params['page'] == null) {
        this.pageNumber = 1;
        return;
      }

      this.pageNumber = +params['page'];
    });

    this.imageObjects = [
      ...cedarPointJson.default,
      ...chicagoJson.default,
      ...minneapolisJson.default,
      ...badlandsJson.default,
      ...idahoJson.default,
      ...oregonJson.default,
      ...redwoodsJson.default,
      ...bayAreaJson.default,
      ...twentyninePalmsJson.default,
      ...puertoVallartaJson.default
    ];

    this.setVisibleImages();

    this.router.events.subscribe(() => {
      this.setVisibleImages();
    })

    this.totalPages = Math.ceil(this.imageObjects.length / this.itemsPerPage);

    this.bottomNavConfig = {
      leftNav: () => {
        if (this.pageNumber == 1) {
          return null
        }
    
        return {
          text: "page " + (this.pageNumber - 1),
          url: "/on-a-road-trip/tile/" + (this.pageNumber - 1)
        }
      },

      rightNav: () => {
        if (this.pageNumber == this.totalPages) {
          return  { 
            text: "cedar point",
            url: "/on-a-road-trip/cedar-point"
          }
        }
    
        return {
          text: "page " + (this.pageNumber + 1),
          url: "/on-a-road-trip/tile/" + (this.pageNumber + 1)
        }
      }
    }
    this.loaded = true;
  }

  setVisibleImages() {
    this.visibleImageObjects = this.imageObjects.slice(this.itemsPerPage * (this.pageNumber - 1), Math.min(this.itemsPerPage * this.pageNumber, this.imageObjects.length));
  }

  openModal(image: ImageObj) {
    let dialog = this.dialog.open(PhotoDialogComponent, {
      data: image
    })
  }

  get leftNav() {
    if (this.pageNumber == 1) {
      return null
    }

    return "page " + (this.pageNumber - 1);
  }

  get rightNav() {
    console.log(this.pageNumber, this.totalPages)
    if (this.pageNumber == this.totalPages) {
      return "cedar point"
    }

    return "page " + (this.pageNumber + 1);
  }

}

export interface ImageObj {
  src: string;
  caption: string | null;
}
