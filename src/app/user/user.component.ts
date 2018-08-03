import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  constructor() { }

  ngOnInit() {
   
  }

}
