import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() onRecipeSelected = new EventEmitter<Recipe>();

  @Input() recipe = Recipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeDetailsSelected(event : Recipe) {
    this.onRecipeSelected.emit(event);
  }
}
