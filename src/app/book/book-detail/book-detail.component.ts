import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  books$: Observable<Book>;
  index: number;
  authors: string[];
  constructor(private route: ActivatedRoute, private service: BookService, private router: Router) { }

  ngOnInit() {
    this.books$ = this.route.paramMap
    .pipe(
      tap((params: ParamMap) => this.index = +params.get('index')),
      switchMap((params: ParamMap) => this.service.get(+params.get('index'))),
      tap((b) => {
         this.authors = (b) ? b.authors : [];
      })
      );
  }

  remove(){
    this.service.remove(this.index);
    this.router.navigate(['/books']);
  }

  goAuthors(){
    let url ='/books/' + this.index + '/authors';
    this.router.navigate([url,{authors: this.authors}]);
  }

}
