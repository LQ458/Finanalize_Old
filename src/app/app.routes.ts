import { Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';

export const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: '', component: IntroComponent },
];
