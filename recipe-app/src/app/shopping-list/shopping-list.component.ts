import { Ingredient } from './../shared/ingredient.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent  {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 6),
    new Ingredient('Tomatoes', 10)
  ];

  // tslint:disable-next-line:typedef
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
