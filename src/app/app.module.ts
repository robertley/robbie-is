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
import { IdahoComponent } from './components/road-trip/components/idaho/idaho.component';
import { OregonComponent } from './components/road-trip/components/oregon/oregon.component';
import { RedwoodsComponent } from './components/road-trip/components/redwoods/redwoods.component';
import { BayAreaComponent } from './components/road-trip/components/bay-area/bay-area.component';
import { TwentyninePalmsComponent } from './components/road-trip/components/twentynine-palms/twentynine-palms.component';
import { PuertoVallartaComponent } from './components/road-trip/components/puerto-vallarta/puerto-vallarta.component';
import { ArizonaComponent } from './components/road-trip/components/arizona/arizona.component'

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
    IdahoComponent,
    OregonComponent,
    RedwoodsComponent,
    BayAreaComponent,
    TwentyninePalmsComponent,
    PuertoVallartaComponent,
    ArizonaComponent
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
