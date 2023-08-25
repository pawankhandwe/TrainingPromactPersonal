import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostManagementComponentComponent } from './post-management-component/post-management-component.component';
import { JsonPlaceholderService } from './json-placeholder.service';
// import { PostManagementComponent } from './post-management.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostManagementComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [JsonPlaceholderService],
  bootstrap: [AppComponent,PostManagementComponentComponent]
})
export class AppModule { }
