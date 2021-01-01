import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  @Input() recipeDetailItem: Recipe;

  constructor(private recipeService: RecipeService) {}

  // tslint:disable-next-line:typedef
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetailItem.ingredients);
  }
}
