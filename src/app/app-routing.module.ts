import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightAddComponent } from './flight-add/flight-add.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { TourAddComponent } from './tour-add/tour-add.component';

const routes: Routes = [{
  path: 'flight/listing',
component: FlightAddComponent
}, {
  path:'hotel/listing',
  component:HotelAddComponent
}, {
  path:'tour/listing',
  component:TourAddComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
