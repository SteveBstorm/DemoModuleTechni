import { Injectable } from '@angular/core';
import { ClientModule } from '../client/client.module';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  userList : User [] = [
    { id : 1, login : "steve", pwd : "1234", role : "admin"},
    { id : 2, login : "arthur", pwd : "1234", role : "user"}
  ]

  constructor() { }

  login(login : string, pwd : string) : void  {
    let user : User = this.userList.find(x => x.login == login && x.pwd == pwd)
    localStorage.setItem("role", user.role)
  }

  logout() {
    localStorage.clear()
  }
}

export interface User {
  id : number,
  login : string,
  pwd : string,
  role : string
}
