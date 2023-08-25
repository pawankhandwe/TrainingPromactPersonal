import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostManagementComponent } from './post-management/post-management.component';
import { JsonPlaceholderService } from './json-placeholder.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostpipePipe } from './postpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostManagementComponent,
    PostpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [JsonPlaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
