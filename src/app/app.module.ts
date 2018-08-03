import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PersonService } from './user/person.service';
import { PostComponent } from './user/post/post.component';
import { ListPostComponent } from './user/list-post/list-post.component';
import { PostService } from './user/post/post.service';
import { FriendsComponent } from './user/friends/friends.component';
import { SendService } from './user/list-post/send.service';
import { FriendService } from './user/friends/friend.service';
import { ColegasComponent } from './user/colegas/colegas.component';


const routes: Routes = [
  {path: '', component: UserComponent },
  { path: 'miscosas', component: FriendsComponent },
  { path: 'miscolegas', component: ColegasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    ListPostComponent,
    FriendsComponent,
    ColegasComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [PersonService,PostService,SendService,FriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
