import { Component, OnInit } from '@angular/core';
import { Person } from '../../person.model';
import { PersonService } from '../person.service';
import { FriendService } from './friend.service';
import { Friends } from './friends.model';
import { Observable } from 'rxjs';
import { FriendsShow } from './friends.show.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  person: Person;
  personas:Person[]=[];
  totalyamigos:FriendsShow[]=[];
  total:Person[]=[];
 ya:Boolean=false;

  constructor(private personService:PersonService,private friendService:FriendService) { }

  ngOnInit() {
    this.personService.getPerson(0).subscribe(person => {
      this.person = person;
      this.personas = person.friends;
      this.personService.getPersons().subscribe(person => this.total=person);
      
    });

    this.addNoamigos();
  }

  addFriend(per:Person) {
    this.person.friends.push(per);

    //llamar a un servicio addPost con url de jsonServer
  }

  addNoamigos(){
    for(let i=0; i<this.total.length;i++){
      let es:boolean=false;
      for(let x=0; x<this.personas.length;x++){
        if(this.total[i].name===this.personas[x].name){
          let p:FriendsShow=new FriendsShow();
          p.esAmigo=true;
          p.persona1=this.total[i];
          this.totalyamigos.push(p);
          es=true;
        }
      }
      if(es!=true && i!=0){
        let p:FriendsShow=new FriendsShow();
        p.esAmigo=false;
        p.persona1=this.total[i];
        this.totalyamigos.push(p);
      }    
    }
  }

showFriends(){
  for(let i=0; i<=this.total.length;i++){
    let es:boolean=false;
    for(let x=0; i<=this.personas.length;x++){
      if(this.total[i].name==this.personas[x].name){
        let p:FriendsShow;
        p.esAmigo=true;
        p.persona1=this.total[i];
        this.totalyamigos.push(p);
        es=true;
      }
    }
    if(es!=true && i!=0){
      let p:FriendsShow;
      p.esAmigo=false;
      p.persona1=this.total[i];
      this.totalyamigos.push(p);
    }    
  
}
  
}

}
