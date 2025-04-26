import { Routes } from '@angular/router';
import { FirstComponent} from './first/first.component';
import { SecondComponent} from './second/second.component';


export  const routes: Routes = [
    { path:  '', redirectTo: 'first-component', pathMatch: 'full' },
    { path: 'first-component', component: FirstComponent },
    { path: 'second-component', component: SecondComponent },
  ];