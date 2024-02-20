import { IntroComponent } from './intro/intro.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: '', component: IntroComponent },
];
