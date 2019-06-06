import { EletronicService } from './../../services/eletronic.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Electronic } from 'src/app/models/electronic';

@Component({
  selector: 'app-electronic-list',
  templateUrl: './electronic-list.component.html',
  styleUrls: ['./electronic-list.component.css']
})
export class ElectronicListComponent implements OnInit {

  electronics$: Observable<Electronic[]>
  constructor(private service: EletronicService) { }

  ngOnInit() {
    this.electronics$ = this.service.electronics$;
  }

}
