import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // tslint:disable-next-line:typedef
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
