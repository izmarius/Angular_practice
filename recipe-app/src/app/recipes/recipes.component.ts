import { Recipe } from './recipe.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  // tslint:disable-next-line:typedef
  setSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
