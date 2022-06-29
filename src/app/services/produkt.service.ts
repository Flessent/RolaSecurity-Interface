import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Produkt} from '../entities/produkt';
import {environment} from "../../environments/environment";
import {Observable, from} from "rxjs";
import {map}  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProduktService {

  constructor(private  httpClient: HttpClient) { }



  getListProdukts(): Observable<Produkt[]> {
      return this.httpClient.get<Produkt[]>(`http://localhost:8080/Produkt/listProdukt`);

    }
    public saveProdukt(Produkt:Produkt) : Observable<Produkt>{
      let host=environment.host;
      return this.httpClient.post<Produkt>(host+"/Produkt/saveProdukt",Produkt);
    }
   updateProdukt(Produkt:Produkt) : Observable<Produkt> {
        let host=environment.host;
        return this.httpClient.patch<Produkt>(host+"/Produkt/updateProdukt",Produkt );
      }

   deleteProdukt(idProdukt: string) : Observable<void> {
       let host=environment.host;
      return  this.httpClient.delete<void>(host+"/Produkt/deleteProdukt/"+idProdukt);
    }

   getProduktByIdProdukt(idProdukt: string): Observable<Produkt> {
       let host= environment.host;
      return this.httpClient.get<Produkt>(host+"/Produkt/getProduktByIdProdukt/"+idProdukt );
    }


}
