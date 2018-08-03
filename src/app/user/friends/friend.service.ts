import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Friends } from "./friends.model";
import { Person } from "../../person.model";
import { FriendsShow } from "./friends.show.model";


@Injectable()
export class FriendService {
  URL_BASE: string = ' http://localhost:3000/related';

    httpOptions= {
         headers: new HttpHeaders({
             'Content-Type': 'application/json',
             'Authorization': 'my-auth-token'
         })
     };


  constructor(private http: HttpClient) { 

  }

  listFriends(): Observable<Person[]> {

    return this.http.get<Person[]>(this.URL_BASE+"?person1.id=0");
  }

  acceptFriend(related:Friends): Observable<Friends[]> {

    return null;
    //return this.http.put(this.URL_BASE,related, this.httpOptions);

}

  rellenarLista(){
    
  }


}