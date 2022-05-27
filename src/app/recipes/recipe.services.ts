import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { ShoppinListServices} from "../shopping-list/shopping-list.services"

@Injectable()
export class RecipeService{

    constructor(private shoppinlistservices: ShoppinListServices){}

    recipeSelected= new EventEmitter<Recipe>()

    private recipes: Recipe[]=[
        new Recipe(
         'Tandoori Chicken',
         'Slow Cooked - Chicken ',
         "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
         [ 
            new Ingredient('Chicken',4),
            new Ingredient('Tandoori Masala', 1)
         ]
         ),
        new Recipe(
            'Big Fat Bowl',
            'What else do you need to say?',
            "https://images.unsplash.com/photo-1651978595428-b79169f223a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            [
                new Ingredient('Veggies', 10),
                new Ingredient('Peprika', 2)
            ]
            )
      ];

    
      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppinlistservices.addIngredients(ingredients)

      }
}