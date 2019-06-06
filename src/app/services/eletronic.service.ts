import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Electronic } from '../models/electronic';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EletronicService {
  private electronicSubject$: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([]);
  public electronics$ = this.electronicSubject$.asObservable();

  constructor() {
    timer(2000)
      .subscribe(() => {
        this.electronicSubject$.next([
          { name: 'eletronic 1', brand: 'Brand 1', price: 1, description: '1' },
          { name: 'eletronic 2', brand: 'Brand 2', price: 2, description: '2' },
          { name: 'eletronic 3', brand: 'Brand 3', price: 3, description: '3' },
          { name: 'eletronic 4', brand: 'Brand 4', price: 4, description: '4' },
          { name: 'eletronic 5', brand: 'Brand 5', price: 5, description: '5' },
        ]);
      });
  }

  add(b: Electronic) {
    let eletronics = this.electronicSubject$.getValue();
    eletronics.push(b);
  }
  
  remove(i: number) {
    let eletronics = this.electronicSubject$.getValue()
    if (i >= 0 && i < eletronics.length) {
      eletronics.splice(i, 1);
    }
  }

  get(i: number): Observable<Electronic> {
    return this.electronics$.pipe(
      map(electronics => (i >= 0 && i < electronics.length) ? electronics[i] : null),
      delay(1000)
    )
  }
}
