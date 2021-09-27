import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RoadTripComponent } from './components/road-trip/road-trip.component';
import { CedarPointComponent } from './components/road-trip/components/cedar-point/cedar-point.component';
import { TileComponent } from './components/road-trip/components/tile/tile.component';
import { ChicagoComponent } from './components/road-trip/components/chicago/chicago.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PhotoDialogComponent } from './components/road-trip/components/photo-dialog/photo-dialog.component';
import { BottomNavigationComponent } from './components/common/bottom-navigation/bottom-navigation.component';
import { MinneapolisComponent } from './components/road-trip/components/minneapolis/minneapolis.component';
import { BadlandsComponent } from './components/road-trip/components/badlands/badlands.component';
import { IdahoComponent } from './components/road-trip/components/idaho/idaho.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoadTripComponent,
    CedarPointComponent,
    TileComponent,
    ChicagoComponent,
    PhotoDialogComponent,
    BottomNavigationComponent,
    MinneapolisComponent,
    BadlandsComponent,
    IdahoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
