import { Component } from '@angular/core';
import { StorageApiService, StorageItem } from '../services/storage-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-first',
  templateUrl: `./first.component.html`,
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonModule, RouterOutlet]
})

export class FirstComponent {
  newItem = '';
  items: StorageItem[] = [];

  constructor(private storageApi: StorageApiService) {}

  addItem(): void {
    const item: StorageItem = { name: this.newItem.trim() };
    if (!item.name) return;


    this.storageApi.addItem(item).subscribe({
      next: (response) => {
        console.log('Odpowiedź z API:', response);
        this.items.push(response);
        this.newItem = '';
      },
      error: (err) => console.error('Błąd:', err)
    });
  }


  loadItems(): void {
    this.storageApi.getItems().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (err) => console.error('Błąd podczas pobierania przedmiotów', err)
    });
  }

  ngOnInit(): void {
    this.loadItems();
  }
}