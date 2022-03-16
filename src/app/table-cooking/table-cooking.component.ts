import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookingDto } from '../dtos/cooking-dto';
import { EventNotifierService } from '../services/even-notifier.service';

@Component({
  selector: 'app-table-cooking',
  templateUrl: './table-cooking.component.html',
  styleUrls: ['./table-cooking.component.scss']
})
export class TableCookingComponent implements OnInit {
  
  subAdd: any;
  detail: CookingDto;

  constructor(  private eventNotify: EventNotifierService
              , private modalService: NgbModal) {
    this.subAdd = this.eventNotify.getAddElement().subscribe(data => {
      
      console.log("LOL ");

      if (data){
          this.modalService.dismissAll();
          this.detail = new CookingDto();
          // this.modalService.open(this.modalKtInfoDetail, {size:'lg'});
      }
    })
  }

  ngOnInit() {
  }

}
