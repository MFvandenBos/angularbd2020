import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData} from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DutchEuroPipe } from './pipes/dutch-euro.pipe';
import {ReactiveFormsModule} from '@angular/forms';

registerLocaleData(localeNL, 'nl');
@NgModule({
  declarations: [
    AppComponent,
    DutchEuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'nl'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
