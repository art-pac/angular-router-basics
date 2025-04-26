import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StorageItem {
  id?: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StorageApiService {
  private baseUrl = 'http://localhost:3000/storage';

  constructor(private http: HttpClient) {}

  getItems(): Observable<StorageItem[]> {
    return this.http.get<StorageItem[]>(this.baseUrl);
  }

  addItem(item: StorageItem): Observable<StorageItem> {
    return this.http.post<StorageItem>(this.baseUrl, item);
  }
}
