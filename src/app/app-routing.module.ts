import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BadlandsComponent } from './components/road-trip/components/badlands/badlands.component';
import { CedarPointComponent } from './components/road-trip/components/cedar-point/cedar-point.component';
import { ChicagoComponent } from './components/road-trip/components/chicago/chicago.component';
import { IdahoComponent } from './components/road-trip/components/idaho/idaho.component';
import { MinneapolisComponent } from './components/road-trip/components/minneapolis/minneapolis.component';
import { OregonComponent } from './components/road-trip/components/oregon/oregon.component';
import { TileComponent } from './components/road-trip/components/tile/tile.component';
import { RoadTripComponent } from './components/road-trip/road-trip.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'on-a-road-trip', component: RoadTripComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'oregon' },
      {
        path: 'tile',
        component: TileComponent
      },
      {
        path: 'tile/:page',
        component: TileComponent
      },
      {
        path: 'cedar-point',
        component: CedarPointComponent
      },
      {
        path: 'cedar-point/:page',
        component: CedarPointComponent
      },
      {
        path: 'chicago',
        component: ChicagoComponent
      },
      {
        path: 'chicago/:page',
        component: ChicagoComponent
      },
      {
        path: 'minneapolis',
        component: MinneapolisComponent
      },
      {
        path: 'minneapolis/:page',
        component: MinneapolisComponent
      },
      {
        path: 'badlands',
        component: BadlandsComponent
      },
      {
        path: 'badlands/:page',
        component: BadlandsComponent
      },
      {
        path: 'idaho',
        component: IdahoComponent
      },
      {
        path: 'idaho/:page',
        component: IdahoComponent
      },
      {
        path: 'oregon',
        component: OregonComponent
      },
      {
        path: 'oregon/:page',
        component: OregonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
