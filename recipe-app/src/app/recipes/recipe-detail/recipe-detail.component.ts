import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit{
  recipeDetailItem: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.recipeDetailItem = this.recipeService.getRecipe(this.id);
      }
    );
  }

  // tslint:disable-next-line:typedef
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetailItem.ingredients);
  }
}
