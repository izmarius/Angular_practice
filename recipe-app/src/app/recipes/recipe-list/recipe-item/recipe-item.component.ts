import { Recipe } from './../../recipe.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent  {
  @Input() recipeItem: Recipe;
}
