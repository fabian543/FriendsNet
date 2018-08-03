import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../post/post.model";


@Injectable()
export class SendService {
  URL_BASE: string = ' http://localhost:3000/post';

    httpOptions= {
         headers: new HttpHeaders({
             'Content-Type': 'application/json',
             'Authorization': 'my-auth-token'
         })
     };

  constructor(private http: HttpClient) { 

  }

  addPost(post:Post): Observable<Post> {

    return this.http.post<Post>(this.URL_BASE, post, this.httpOptions);
 }
}