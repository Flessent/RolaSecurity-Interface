import { Component, OnInit,Input } from '@angular/core';
import {Produkt} from '../../../../entities/produkt';

@Component({
  selector: 'app-item-produkt',
  templateUrl: './item-produkt.component.html',
  styleUrls: ['./item-produkt.component.css']
})
export class ItemProduktComponent implements OnInit {
@Input() produkt! : Produkt;
verfuebarkeit:string = "";
valeur='Ja';
  constructor() { }
  onDeleteProdukt(idProdukt : number) {
  }

  ngOnInit(): void {
    if(this.produkt.verfuebarkeit){
  this.verfuebarkeit= String(this.produkt.verfuebarkeit);
  this.verfuebarkeit='Ja';

    }else {this.verfuebarkeit='Nein'}
  }

}

