import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 // @Output() onIndvRecipeSelected = new EventEmitter<Recipe>();

  /*
  recipes: Recipe[] = [
    new Recipe('Recipe_One', 'Test Recipe One', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/0/ig1a09_roasted_carrots.jpg.rend.hgtvcom.826.620.suffix/1393645736360.jpeg'),
    new Recipe('Recipe_Two', 'Test Recipe Two', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4_pzlbTQ-OeYGDdM6Fr8D5LB-fwsBKIkI1g3yA1TsXMRcTx9&s')
  ];*/

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
	  this.recipes = this.recipeService.getRecipes();
  }

  /*
  onRecipeItemSelected(myRecipe: Recipe) {
    this.onIndvRecipeSelected.emit(myReecipe);
  }*/
}
