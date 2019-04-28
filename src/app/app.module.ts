import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightAddComponent } from './flight-add/flight-add.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { TourAddComponent } from './tour-add/tour-add.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlightServiceService } from './flight-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightAddComponent,
    HotelAddComponent,
    TourAddComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlightServiceService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
