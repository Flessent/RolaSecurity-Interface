import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Subscription,Observable } from 'rxjs';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import {ProduktService} from '../../../services/produkt.service';
import {Produkt} from '../../../entities/produkt';

@Component({
  selector: 'app-update-produkt',
  templateUrl: './update-produkt.component.html',
  styleUrls: ['./update-produkt.component.css']
})
export class UpdateProduktComponent implements OnInit {
 verfuebarkeit : boolean=false;

 verfuebarkeit1 : boolean=false;
  produkt !: Produkt;
    updateProduktForm !: FormGroup;
    produktSubscription !: Subscription;
    constructor(private produktService:ProduktService, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder : FormBuilder) {}

    ngOnInit(): void {
         this.createForm();//Erstellung eines leeren Formular
 this.activatedRoute.paramMap.subscribe(params => {
const idProdukt = params.get('idProdukt');

 console.log('Id is'+idProdukt);
    this.produktSubscription=  this.produktService.getProduktByIdProdukt(idProdukt!).subscribe((produkt:Produkt) => {

        if (produkt) {
          this.produkt = produkt;
          this.updateProduktForm.patchValue({
            name: produkt.name,
            price:produkt.price,
            quantity:produkt.quantity,
            verfuebarkeit: produkt.verfuebarkeit,

          });
          this.verfuebarkeit=produkt.verfuebarkeit;
        }
        if(this.verfuebarkeit){
        this.valeur='Ja';
        this.verfuebarkeit1=true;

        } else{
        this.valeur='Nein';
        this.verfuebarkeit1=false;
        }
      });
 })

    }

    createForm() {
      this.updateProduktForm = this.formBuilder.group({
        name: new FormControl('null', [Validators.required, Validators.minLength(6) ]),
                price: new FormControl('null', [Validators.required, Validators.minLength(6) ]),
        quantity: new FormControl('null', [Validators.required, Validators.minLength(6) ]),

        verfuebarkeit : new FormControl(this.verfuebarkeit),
      });
    }
    valeur:string='';
 Titel1 : String ='Änderungen umsetzen ! ';
 onIntensiv(){
 if(this.verfuebarkeit1 && this.valeur=='Ja'){
 this.valeur='Nein';
 this.verfuebarkeit1=false;

 } else if(! this.verfuebarkeit1 && this.valeur=='Nein'){
 this.verfuebarkeit1=true;
 this.valeur='Ja';}

 }
    onSubmit() {
      if (!this.updateProduktForm.valid) {
      window.alert('invalid formular')

        return;
      }

      const name = this.updateProduktForm.value.name;
      let verfuebarkeit = this.updateProduktForm.value.verfuebarkeit;
            const price = this.updateProduktForm.value.price;
      const quantity = this.updateProduktForm.value.quantity;

      verfuebarkeit=this.verfuebarkeit1;
      const produkt: Produkt = {
        idProdukt: this.produkt.idProdukt,
        name,
        price,
        quantity,
        verfuebarkeit

      };
 console.log('that is verfuebarkeit1'+this.verfuebarkeit1)
 console.log('das sind die Werte'+ produkt.name,produkt.verfuebarkeit)
 this.produktService.updateProdukt(produkt).subscribe((produkt:Produkt)=> {console.log(produkt.name)});
 window.alert('Informationen wurden gewünschmäßig geändert');
      this.router.navigate(['/produkt/listProdukt']);
    }

    ngOnDestroy() {
      if (this.produktSubscription) {
        this.produktSubscription.unsubscribe();
      }
    }


}
