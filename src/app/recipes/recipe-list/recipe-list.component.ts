import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[];
 
 
 
  constructor(private recipeservices: RecipeService) { }


  ngOnInit(): void {
    this.recipe= this.recipeservices.getRecipes()
  }
}
  
