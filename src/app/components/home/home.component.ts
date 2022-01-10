import { Component, OnInit } from '@angular/core';
import { FakeauthService } from 'src/app/service/fakeauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  login : string
  pwd : string

  constructor(
    private _auth : FakeauthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._auth.login(this.login, this.pwd)
    alert("Connexion OK")
  }

  test(truc : any) {
    console.log('toto')
  }

}
