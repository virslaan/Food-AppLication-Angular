import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Delicious Ribs',
      'A great rack of ribs - easily done at home!',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [
        new Ingredient('Ribs', 1),
        new Ingredient('Salad', 1)
      ]),
    new Recipe(
      'Blueberry Pie',
      'A sweet treat for any dessert experience!',
      'https://assets.bonappetit.com/photos/57adece91b3340441497571a/16:9/w_1000,c_limit/pear-pie-with-red-wine-and-rosemary1.jpg',
      [
        new Ingredient('Blueberries', 20),
        new Ingredient('Pie Crust', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    // returns exact copy of the array, so that nothing else can access the array from outside the service
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
