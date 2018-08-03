import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../../person.model';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Form, FormGroup } from '@angular/forms';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  person:Person;
  valueInput:string;
  post:Post[]=[];
  constructor(private personService:PersonService,private postService:PostService) { }

  ngOnInit() {
    this.personService.getPerson(0).subscribe(person => this.person = person);

    this.postService.listPost().subscribe(post => this.post = post);
  }

  doPost(){
    //hacer un post model
    let post=new Post();
    post.person = this.person;
    post.posted = new Date();
    post.text = this.valueInput;

    this.postService.addPost(post).subscribe(post => this.post.push(post));

  }


}
