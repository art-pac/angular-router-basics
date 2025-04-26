import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { StorageApiService } from './services/storage-api.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [StorageApiService, StorageService],
  standalone: true,
})
export class AppComponent {
  title = 'awesome';
}