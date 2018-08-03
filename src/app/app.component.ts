import { Component } from '@angular/core';
import { Person } from './person.model';
import { PersonService } from './user/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person: Person;
  title = 'app';
  constructor(private personService:PersonService){}

  ngOnInit(){
    this.personService.getPerson(0)
    .subscribe(person => this.person = person);
  }
}
