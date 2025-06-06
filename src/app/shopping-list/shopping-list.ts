import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListItem } from './listItem';

@Component({
  selector: 'shopping-list',
  imports: [FormsModule],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.scss'
})
export class ShoppingList {
  item: string = '';
  listOfItems: ListItem[] = [];

  addItem() {
    if(!this.item) {
      return;
    }
    const newItem = new ListItem();
    newItem.id = this.listOfItems.length + 1;
    newItem.name = this.item
    this.listOfItems.push(newItem);
    this.item = "";
  }  
}
