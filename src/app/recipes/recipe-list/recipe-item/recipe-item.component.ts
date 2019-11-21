import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { LoggingService } from 'src/app/logging.service';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  //@Output() onRecipeSelected = new EventEmitter<Recipe>();

  @Input() recipe = Recipe;

  constructor(private loggingService : LoggingService, private recipeService : RecipeService) { }

  ngOnInit() {
  }

  onRecipeDetailsSelected(event : Recipe) {
    this.loggingService.logChange(event.name);

    this.recipeService.onIndvRecipeSelected.emit(event);
  }
}
