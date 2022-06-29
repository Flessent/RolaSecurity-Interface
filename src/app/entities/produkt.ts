
export class Produkt{
idProdukt?: string;
name: string ;
price : number;
quantity: number;
 verfuebarkeit: boolean;
constructor( name: string, price : number,quantity: number,verfuebarkeit:boolean){
this.name = name;
this.price = price;
this.quantity =quantity;
this.verfuebarkeit = verfuebarkeit;
}

}

