import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinListServices } from './shopping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
 
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppinglistservice: ShoppinListServices) { }

  ngOnInit(): void {
    this.ingredients=this.shoppinglistservice.getIngredients()
   this.shoppinglistservice.updateIngredients.subscribe(
          (ingredients: Ingredient[]) =>{
                 this.ingredients=ingredients;

             } 
   )
  }
  
}
