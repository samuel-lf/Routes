import { EletronicService } from './../../../services/eletronic.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Electronic } from 'src/app/models/electronic';

@Component({
  selector: 'app-electronic-detail',
  templateUrl: './electronic-detail.component.html',
  styleUrls: ['./electronic-detail.component.css']
})
export class ElectronicDetailComponent implements OnInit {

  electronics$: Observable<Electronic>
  constructor(private route: ActivatedRoute,
    private service: EletronicService, private router: Router) { }

  ngOnInit() {
    let index: number = +this.route.snapshot.paramMap.get('index');
    this.electronics$ = this.service.get(index);
  }

  back(){
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}
