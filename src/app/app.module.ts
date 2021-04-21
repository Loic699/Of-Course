import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardTravelComponent } from './card-travel/card-travel.component';
import { ActivityComponent } from './activity/activity.component';

import { HomeComponent } from './home/home.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { NavbarComponent, } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { route } from './app.route';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepicker, MatDatepickerModule, MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    CardTravelComponent,
    ActivityComponent,
    HomeComponent,
    TravelListComponent,
    NavbarComponent,
    FooterComponent,
    CategoryCardComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatDateRangeInput, MatDateRangePicker]
})
export class AppModule { }
