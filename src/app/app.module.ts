import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTableModule} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';
import { UserlistComponent } from './userlist/userlist.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
