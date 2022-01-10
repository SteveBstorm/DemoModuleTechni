import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  get isAdmin() : boolean {return localStorage.getItem("role") == 'admin' }
  constructor() { }

  ngOnInit(): void {
  }

}
