import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Book } from '../models/book';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.bookSubject$.asObservable();

  constructor() { 
    timer(2000)
    .subscribe(() => {
      this.bookSubject$.next([
        {title: 'Book 1', pages: 200, authors: ['john', 'nicole']},
        {title: 'Book 2', pages: 100, authors: ['nicole']},
        {title: 'Book 3', pages: 2000, authors: ['carl', 'sam']},
        {title: 'Book 4', pages: 500, authors: ['paul', 'peter']},
        {title: 'Book 5', pages: 50, authors: ['mily', 'annie']}
  
      ]);
    });
  }

  add(b: Book){
    let books = this.bookSubject$.getValue();
    books.push(b);
  }
  remove(i: number){
    let books = this.bookSubject$.getValue()
    if(i >= 0 && i < books.length ){
      books.splice(i, 1);
    }
  }
  get(i: number): Observable<Book>{
    return this.books$.pipe(
      map(books => (i >= 0 && i < books.length) ? books[i] : null),
      delay(1000)
    )
  }
}
