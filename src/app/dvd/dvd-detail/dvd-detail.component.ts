import { DvdService } from './../../services/dvd.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {

  dvds$: Observable<Dvd>;
  title = null;
  constructor(private route: ActivatedRoute, private service: DvdService, private router: Router) { }

  ngOnInit() {
    let index = +this.route.snapshot.paramMap.get('index');
    this.dvds$ = this.service.get(index);
    this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.has('title')){
        this.title = params.get('title');
      }
    });
  }

  goBack(){
    this.router.navigate(['/dvds']);
  }

}
