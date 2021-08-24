import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoadTripComponent } from './components/road-trip/road-trip.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'on-a-road-trip', component: RoadTripComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
