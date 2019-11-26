import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network-layout',
  templateUrl: './network-layout.component.html',
  styleUrls: ['./network-layout.component.css']
})
export class NetworkLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoStorage() {
    this.router.navigate(['/']);
  }

}
