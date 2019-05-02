import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { FlightListingComponent } from './flight-listing/flight-listing.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';

const routes: Routes = [{
  path: 'flight',
  component: FlightComponent,
  children: [
      {
          path: 'list',
          component: FlightListingComponent
      },
      {
          path: 'detail',
          component: FlightDetailComponent
      }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirRoutingModule { }
