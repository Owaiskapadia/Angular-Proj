import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeEla:Recipe;

  constructor(private recipeservice: RecipeService) { }

  ngOnInit(): void {
    this.recipeservice.recipeSelected.subscribe(
      (recipe:Recipe) => {
        this.recipeEla= recipe
      }
    )
  }
  
}
