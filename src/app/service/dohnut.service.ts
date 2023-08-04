import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dohnut } from '../model/dohnut';
import DohnutsList from '../data/donuts.json';
@Injectable({
  providedIn: 'root'
})
export class DohnutService {

  
  constructor() { }
  Dohnuts: Dohnut[] = DohnutsList;

  getDohnutList(): Dohnut[] {
    return this.Dohnuts;
    }

/*
    getDohnut(id: string) {
      const headers = new HttpHeaders().set('X-Auth-Token', environment.apiKey);
      return this.http.get<Dohnut>(environment.teamUrl+id, { headers: headers });
      }
*/
}
