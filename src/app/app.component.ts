import { Component } from '@angular/core';
import { EventNotifierService } from './services/even-notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public eventNotify: EventNotifierService) {
  }

  addRecipe: boolean;

  ngOnInit() {
    this.addRecipe = false;
  }

  openModal() { 
    this.addRecipe = true;
    this.eventNotify.sendAddElement(this.addRecipe);
  }
}
