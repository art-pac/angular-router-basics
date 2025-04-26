import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageApiService, StorageItem } from '../services/storage-api.service';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-second',
  standalone: true,
  templateUrl: './second.component.html',
  imports: [CommonModule, FormsModule, RouterOutlet],

})
export class SecondComponent implements OnInit {
  storageItems: StorageItem[] = [];

  constructor(private storageApi: StorageApiService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.storageApi.getItems().subscribe({
      next: (data) => {
        this.storageItems = data;
      },
      error: (err) => {
        console.error('Błąd podczas pobierania danych:', err);
      }
    });
  }
}