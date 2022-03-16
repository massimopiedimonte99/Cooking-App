import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookingDto } from '../dtos/cooking-dto';
import { EventNotifierService } from '../services/even-notifier.service';
import { FormGroup } from '@angular/forms';
import { CookingService } from '../services/cooking.service';

@Component({
  selector: 'app-table-cooking',
  templateUrl: './table-cooking.component.html',
  styleUrls: ['./table-cooking.component.scss']
})
export class TableCookingComponent implements OnInit {
  
  @ViewChild('contentAddRecipe', { static: true }) public modalKtInfoDetail: any;
  @ViewChild('contentRemoveRecipe', { static: true }) public modalKtInfoRemove: any;
  
  subAdd: any;

  recipe: CookingDto;
  detail: any[];
  detailDaEliminare: any;

  constructor(  private eventNotify: EventNotifierService
              , private modalService: NgbModal
              , private cookingService: CookingService) {
    this.subAdd = this.eventNotify.getAddElement().subscribe(data => {
      if (data){
          this.modalService.dismissAll();
          this.recipe = new CookingDto();
          this.detail = [];
          this.modalService.open(this.modalKtInfoDetail, {size:'lg', backdrop: 'static', keyboard: false});
      }
    })
  }

  
  ngOnInit() {
    this.recipe = new CookingDto();
    this.detail = [];
    this.caricaTabella();
  }
  
  caricaTabella() {
    this.detail = [];
    this.cookingService.getAllRecipes().then(res => {
      res.docs.forEach(e => {
        this.detail.push(e.data());
      });
    });
  }

  closeModal() {
    this.modalService.dismissAll();
    this.caricaTabella();
  }

  openModalRemove(item) {
    this.detailDaEliminare = item;
    this.modalService.open(this.modalKtInfoRemove, {size:'lg', backdrop: 'static', keyboard: false});
  }

  deleteItem() {
    this.cookingService.deleteRecipe(this.detailDaEliminare.link).then(res => {
      this.detailDaEliminare = {};
      this.modalService.dismissAll();
      this.caricaTabella();
    });
  }

  saveRecipe() {
    this.cookingService.addRecipe(this.recipe).then(res => {
      this.recipe = new CookingDto();
      this.modalService.dismissAll();  
      this.caricaTabella();
    }).catch(err => console.log(err));
  }

}
