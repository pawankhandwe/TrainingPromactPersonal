import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberTransformPipe } from './number-transform.pipe';
import { NumberComponentComponent } from './number-component/number-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberTransformPipe,
    NumberComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,NumberComponentComponent]
})
export class AppModule { }
