import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AymeliCodeComponent } from './aymeli-code/aymeli-code.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';  

const material = [ MatTabsModule ];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    AymeliCodeComponent,
    ProfilPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    material
  ],
  exports: [material],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
