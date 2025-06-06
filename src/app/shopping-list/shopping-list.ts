import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListItem } from './listItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shopping-list',
  imports: [FormsModule,CommonModule],
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

  checkItem(item: ListItem) {
    item.checked = !item.checked;
  }
}
