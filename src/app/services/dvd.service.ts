import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Dvd } from '../models/dvd';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DvdService {
  private dvdSubject$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  public dvds$ = this.dvdSubject$.asObservable();

  constructor() { 
    timer(2000)
    .subscribe(() => {
      this.dvdSubject$.next([
        {title: 'dvd 1', year: 2016, genre:'Movie'},
        {title: 'dvd 2', year: 2006, genre:'Movie'},
        {title: 'dvd 3', year: 2019, genre:'Movie'},
        {title: 'dvd 4', year: 2010, genre:'Movie'},
        {title: 'dvd 5', year: 2011, genre:'Movie'}
  
      ]);
    });
  }

  add(b: Dvd){
    let dvds = this.dvdSubject$.getValue();
    dvds.push(b);
  }
  remove(i: number){
    let dvds = this.dvdSubject$.getValue()
    if(i >= 0 && i < dvds.length ){
      dvds.splice(i, 1);
    }
  }
  get(i: number): Observable<Dvd>{
    return this.dvds$.pipe(
      map(dvds => (i >= 0 && i < dvds.length) ? dvds[i] : null),
      delay(1000)
    )
  }
}
