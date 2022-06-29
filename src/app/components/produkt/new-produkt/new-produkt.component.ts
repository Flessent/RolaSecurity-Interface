import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormGroup, FormBuilder, Validators, FormControl,FormArray} from '@angular/forms';
import {Produkt} from '../../../entities/produkt';
import {ProduktService} from '../../../services/produkt.service';

@Component({
  selector: 'app-new-produkt',
  templateUrl: './new-produkt.component.html',
  styleUrls: ['./new-produkt.component.css']
})
export class NewProduktComponent implements OnInit {
Title1: string='Registrierung eines neuen Produkts'
  constructor(private formBuilder: FormBuilder, private produktService: ProduktService) { }


produktFormGroup? : FormGroup;
  submitted:boolean=false;
valeur:string='Ja';
  ngOnInit(): void {

      this.produktFormGroup = this.formBuilder.group({
        name:new FormControl("", [Validators.required,Validators.minLength(6)]),
price:new FormControl("", [Validators.required,Validators.minLength(6)]),
quantity:new FormControl("", [Validators.required,Validators.minLength(6)]),

      });
  }
onSaveProdukt() {
 if(!this.produktFormGroup) {
 return;
 } else{

 const name= this.produktFormGroup.value.name;
 const price= this.produktFormGroup.value.price;
 const quantity= this.produktFormGroup.value.quantity;

 this.produktFormGroup.value.verfuebarkeit=this.verfuebarkeit;
 const verfuebarkeit= this.produktFormGroup.value.verfuebarkeit;
//console.log(verfuebarkeit);

 const produkt = new Produkt(name,price,quantity,verfuebarkeit);
console.log(produkt.verfuebarkeit)
 this.produktService.saveProdukt(produkt).subscribe( (produkt:Produkt) => { console.log(produkt)});
 }
  }



verfuebarkeit : boolean = true;
//this.valeur='Ja';
Titel1 : String ='Fügt ein neues Produkt hinzu ! ';
onVerfuebarkeit(){
if(this.verfuebarkeit && this.valeur=='Ja'){
this.valeur='Nein';
this.verfuebarkeit=false;

} else if(! this.verfuebarkeit && this.valeur=='Nein'){
this.verfuebarkeit=true;
this.valeur='Ja';}

}




}
