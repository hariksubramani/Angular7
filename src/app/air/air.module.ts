import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirRoutingModule } from './air-routing.module';
import { FlightComponent } from './flight/flight.component';
import { FlightListingComponent } from './flight-listing/flight-listing.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';

@NgModule({
  declarations: [FlightComponent, FlightListingComponent, FlightDetailComponent],
  imports: [
    CommonModule,
    AirRoutingModule
  ],
  exports: [FlightComponent, FlightListingComponent, FlightDetailComponent]
})
export class AirModule { }
