import { Cocktail } from './../cocktail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss'],
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Array<Cocktail> = [
    new Cocktail('Spritz'),
    new Cocktail('Martini'),
    new Cocktail('Margarita'),
    new Cocktail('Sex on the beach'),
    new Cocktail('Mojito'),
  ];

  constructor() {}

  ngOnInit(): void {}
}
