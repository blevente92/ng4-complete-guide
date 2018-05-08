import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is the desc for it',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/702px-Recipe-575434.svg.png'),
    new Recipe('A test Recipe2', 'This is the desc for it',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/702px-Recipe-575434.svg.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }


}
