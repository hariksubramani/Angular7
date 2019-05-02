import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccomodationRoutingModule } from './accomodation-routing.module';
import { PropertyComponent } from './property/property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

@NgModule({
  declarations: [PropertyComponent, PropertyListComponent, PropertyDetailComponent],
  imports: [
    CommonModule,
    AccomodationRoutingModule
  ],
  exports: [PropertyComponent, PropertyListComponent, PropertyDetailComponent]
})
export class AccomodationModule { }
