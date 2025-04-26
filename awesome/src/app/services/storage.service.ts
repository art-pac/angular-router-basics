import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: string[] = [];

  constructor() {}

  addItem(item: string): void {
    this.storage.push(item);
  }

  getItems(): string[] {
    return this.storage;
  }
}
