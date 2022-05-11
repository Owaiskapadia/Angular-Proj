import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipekoBheja= new EventEmitter<Recipe>()
  recipes: Recipe[]=[
    new Recipe('A Test Recipe', 'This a simple test',"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"),
    new Recipe('A Test Recipe2', 'This a simple test',"https://images.unsplash.com/photo-1651978595428-b79169f223a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
  ];
 
  constructor() { }


  ngOnInit(): void {
  }
  recipeWasCreated(event:any){
    console.log(event.name + " event aaya")
    this.recipekoBheja.emit(event)
  }
}
