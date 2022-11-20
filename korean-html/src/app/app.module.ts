import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChapiterComponent } from './chapiters/chapiter/chapiter.component';
import { ChapitersComponent } from './chapiters/chapiters.component';
import { HomeComponent } from './home/home.component';
import { GeneratorsComponent } from './generators/generators.component';
import { NumbersComponent } from './generators/numbers/numbers.component';
import { registerLocaleData } from '@angular/common';
import koreanLocale from '@angular/common/locales/ko';

@NgModule({
  declarations: [
    AppComponent,
    ChapitersComponent,
    HomeComponent,
    ChapiterComponent,
    GeneratorsComponent,
    NumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
