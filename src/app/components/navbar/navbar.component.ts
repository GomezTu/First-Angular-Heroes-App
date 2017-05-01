import { Component, OnInit } from '@angular/core';

export class RouteInfo {
  constructor(public path: string, public title: string){ }
}

export const ROUTES = [
  new RouteInfo('/heroes', 'Heroes'),
  new RouteInfo('/dashboard', 'Dashboard'),
  new RouteInfo('/crisis-center', 'Crisis Center'),
  new RouteInfo('admin', 'Admin'),
]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private routes : any[];
  
  ngOnInit() {
    this.routes = ROUTES;
   }

}
