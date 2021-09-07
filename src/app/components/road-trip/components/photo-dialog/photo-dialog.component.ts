import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageObj } from '../tile/tile.component';

@Component({
  selector: 'app-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.scss']
})
export class PhotoDialogComponent implements OnInit {

  image: ImageObj

  constructor(@Inject(MAT_DIALOG_DATA) public data: ImageObj) {
    this.image = data;
  }

  ngOnInit(): void {
  }

}
