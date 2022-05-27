import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppinListServices{

    updateIngredients= new EventEmitter<Ingredient[]>();

   private ingredients: Ingredient[]=[
        new Ingredient('apples',5),
        new Ingredient('mango',10)
      ];
      getIngredients(){
          return this.ingredients.slice();
      }
     

      ingredientAdded(ingredient:Ingredient){
          for(let ingre of this.ingredients){

          
          for(let ingred of this.ingredients){
      
              if(ingred.name==ingredient.name){
                  ingred.amount= ingred.amount+ ingredient.amount
                  console.log(ingred.name,ingredient.name)
                  this.updateIngredients.emit(this.ingredients.slice())
                  return;
              }
             
          }
          if(ingre.name!==ingredient.name){
            this.ingredients.push(ingredient)
            console.log(this.ingredients)
            this.updateIngredients.emit(this.ingredients.slice())
            return;
        }
          
        }
      }
      addIngredients(iingredients:Ingredient[]){
            for(let ingredient of iingredients){
                this.ingredientAdded(ingredient)
            }
            
            // this.ingredients.push(...iingredients)
            this.updateIngredients.emit(this.ingredients.slice())
        }
}