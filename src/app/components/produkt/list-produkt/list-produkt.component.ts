import { Component, OnInit } from '@angular/core';
import {ProduktService} from '../../../services/produkt.service';
import {Produkt} from '../../../entities/produkt';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-list-produkt',
  templateUrl: './list-produkt.component.html',
  styleUrls: ['./list-produkt.component.css']
})


export class ListProduktComponent implements OnInit {
    produkten :Observable<Produkt[]> | null = null;
    listProdukten :Produkt[] = [];

  constructor(private produktService: ProduktService ) { }

  ngOnInit(): void {
    this.produktService.getListProdukts().subscribe((data: Produkt[]) => {
        console.log(data);
        this.listProdukten = data;

      });
    }


}

