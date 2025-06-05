import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'lista-de-compras';
}
