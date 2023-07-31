import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArizonaComponent } from './components/road-trip/components/arizona/arizona.component';
import { BadlandsComponent } from './components/road-trip/components/badlands/badlands.component';
import { BayAreaComponent } from './components/road-trip/components/bay-area/bay-area.component';
import { CedarPointComponent } from './components/road-trip/components/cedar-point/cedar-point.component';
import { ChicagoComponent } from './components/road-trip/components/chicago/chicago.component';
import { IdahoComponent } from './components/road-trip/components/idaho/idaho.component';
import { MinneapolisComponent } from './components/road-trip/components/minneapolis/minneapolis.component';
import { OregonComponent } from './components/road-trip/components/oregon/oregon.component';
import { PuertoVallartaComponent } from './components/road-trip/components/puerto-vallarta/puerto-vallarta.component';
import { RedwoodsComponent } from './components/road-trip/components/redwoods/redwoods.component';
import { TileComponent } from './components/road-trip/components/tile/tile.component';
import { TwentyninePalmsComponent } from './components/road-trip/components/twentynine-palms/twentynine-palms.component';
import { UtahComponent } from './components/road-trip/components/utah/utah.component';
import { RoadTripComponent } from './components/road-trip/road-trip.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'on-a-road-trip', component: RoadTripComponent,
  //   children: [
  //     { path: '', pathMatch: 'full', redirectTo: 'utah' },
  //     {
  //       path: 'tile',
  //       component: TileComponent
  //     },
  //     {
  //       path: 'tile/:page',
  //       component: TileComponent
  //     },
  //     {
  //       path: 'cedar-point',
  //       component: CedarPointComponent
  //     },
  //     {
  //       path: 'cedar-point/:page',
  //       component: CedarPointComponent
  //     },
  //     {
  //       path: 'chicago',
  //       component: ChicagoComponent
  //     },
  //     {
  //       path: 'chicago/:page',
  //       component: ChicagoComponent
  //     },
  //     {
  //       path: 'minneapolis',
  //       component: MinneapolisComponent
  //     },
  //     {
  //       path: 'minneapolis/:page',
  //       component: MinneapolisComponent
  //     },
  //     {
  //       path: 'badlands',
  //       component: BadlandsComponent
  //     },
  //     {
  //       path: 'badlands/:page',
  //       component: BadlandsComponent
  //     },
  //     {
  //       path: 'idaho',
  //       component: IdahoComponent
  //     },
  //     {
  //       path: 'idaho/:page',
  //       component: IdahoComponent
  //     },
  //     {
  //       path: 'oregon',
  //       component: OregonComponent
  //     },
  //     {
  //       path: 'oregon/:page',
  //       component: OregonComponent
  //     },
  //     {
  //       path: 'redwoods',
  //       component: RedwoodsComponent
  //     },
  //     {
  //       path: 'redwoods/:page',
  //       component: RedwoodsComponent
  //     },
  //     {
  //       path: 'bay-area',
  //       component: BayAreaComponent
  //     },
  //     {
  //       path: 'bay-area/:page',
  //       component: BayAreaComponent
  //     },
  //     {
  //       path: '29-palms',
  //       component: TwentyninePalmsComponent
  //     },
  //     {
  //       path: '29-palms/:page',
  //       component: TwentyninePalmsComponent
  //     },
  //     {
  //       path: 'puerto-vallarta',
  //       component: PuertoVallartaComponent
  //     },
  //     {
  //       path: 'puerto-vallarta/:page',
  //       component: PuertoVallartaComponent
  //     },
  //     {
  //       path: 'arizona',
  //       component: ArizonaComponent
  //     },
  //     {
  //       path: 'arizona/:page',
  //       component: ArizonaComponent
  //     },
  //     {
  //       path: 'utah',
  //       component: UtahComponent
  //     },
  //     {
  //       path: 'utah/:page',
  //       component: UtahComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
