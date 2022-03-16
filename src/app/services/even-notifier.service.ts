import { Injectable, EventEmitter, Output } from '@angular/core';


@Injectable()
export class EventNotifierService {

  private addElement: EventEmitter<any>;

  constructor() {
    this.addElement = new EventEmitter<any>();
  }

  public sendAddElement(data: any) {
    this.addElement.emit(data);
  }

  public getAddElement() {
    return this.addElement.asObservable();
  }

}
