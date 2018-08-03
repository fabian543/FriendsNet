import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Person } from '../person.model';


@Injectable()
export class PersonService {
  URL_BASE: string = 'http://localhost:3000/persons/';

  constructor(private http: HttpClient) { 

  }

  getPerson(id: number): Observable<Person> {
    const url = `${this.URL_BASE}/${id}`;
    return this.http.get<Person>(url);
  }

  getPersons():Observable<Person[]> {
      return this.http.get<Person[]>('http://localhost:3000/persons');
  }


}
