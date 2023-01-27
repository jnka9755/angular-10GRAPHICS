import { Component, OnInit } from '@angular/core';

interface MenuItem{
  route: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menu: MenuItem[] = [
    {
      route: 'graphics/bars',
      text: 'Barras'
    },
    {
      route: 'graphics/double-bars',
      text: 'Barras dobles'
    },
    {
      route: 'graphics/donut',
      text: 'Dona'
    },
    {
      route: 'graphics/donut-http',
      text: 'Dona Http'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
