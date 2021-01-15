import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit{
  recipeDetailItem: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {}

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

  // tslint:disable-next-line:typedef
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
