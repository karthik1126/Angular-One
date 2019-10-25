import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('quantityInput') quantityInput: ElementRef;
  @Output() ingredientInfo = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredients() {
    const ingredientName = this.nameRef.nativeElement.value;
    const ingredientQuantity = this.quantityInput.nativeElement.value;
    this.ingredientInfo.emit(new Ingredient(ingredientName, ingredientQuantity));
  }
}
