import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { TableCookingComponent } from './table-cooking/table-cooking.component';
import { EventNotifierService } from './services/even-notifier.service';

@NgModule({
  declarations: [
    AppComponent,
    TableCookingComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [EventNotifierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
