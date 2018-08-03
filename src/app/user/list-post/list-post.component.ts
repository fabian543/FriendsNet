import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../../person.model';
import { Post } from '../post/post.model';
import { SendService } from './send.service';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  person:Person;
  valueInput: string;
post:Post[];
  constructor(private personService:PersonService,private sendService:SendService,private postService:PostService) { }

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

    this.sendService.addPost(post).subscribe(post => this.post.push(post));

  }

}
