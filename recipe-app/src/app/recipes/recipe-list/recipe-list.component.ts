import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
