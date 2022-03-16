import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableCookingComponent } from './table-cooking/table-cooking.component';
import { EventNotifierService } from './services/even-notifier.service';
import { CookingService } from './services/cooking.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableCookingComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule, 
    NgbModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [EventNotifierService, CookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
