import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    IngredientName: "";
    IngredientAmount: number;
  @Output()  Ingredient= new EventEmitter<{name:string,amount:number}>();
  constructor() { }

  ngOnInit(): void {
  }
  IngredientAdded(){

    this.Ingredient.emit({name:this.IngredientName,amount:this.IngredientAmount})
    this.IngredientName= "";
    this.IngredientAmount= null;
   
  }
}
