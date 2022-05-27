import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinListServices } from '../shopping-list.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    IngredientName: string;
    IngredientAmount: number;
  // @Output()  Ingredient= new EventEmitter<{name:string,amount:number}>();
  constructor(private shoppinglistservices: ShoppinListServices ) { }

  ngOnInit(): void {
  }
  IngredientAdded(){
    if(this.IngredientName!== "" && this.IngredientAmount!== null ){

      this.shoppinglistservices.ingredientAdded(new Ingredient(this.IngredientName,this.IngredientAmount))
    }
    // this.Ingredient.emit({name:this.IngredientName,amount:this.IngredientAmount})
    
    this.IngredientName= "";
    this.IngredientAmount= null;
   
  }
}
