import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListItem } from './listItem';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'shopping-list',
  imports: [FormsModule, CommonModule, MatButtonModule, MatCheckbox, MatIconModule],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.scss'
})
export class ShoppingList {
  item: string = '';
  listOfItems: ListItem[] = [];
  private nextId: number = 0;

  addItem() {
    const normalizedInput = this.item.trim().toLocaleLowerCase();

    if(!this.item) return;
    if(this.listOfItems.some((i) => i.name?.trim().toLocaleLowerCase() === normalizedInput)) return;

    const newItem = new ListItem();
    newItem.id = this.nextId++; // unique id
    newItem.name = this.item
    this.listOfItems.push(newItem);
    this.item = "";
  }  

  checkItem(item: ListItem) {
    item.checked = !item.checked;
  }

  removeItem(item: ListItem) {
    this.listOfItems = this.listOfItems.filter((i) => i.id != item.id)
  }

  clearList() {
    this.listOfItems = [];    
  }
}
