import { IntroComponent } from './intro/intro.component';
import { Routes } from '@angular/router';
import { QuanComponent } from './quan/quan.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { QualComponent } from './qual/qual.component';
import { PropertyComponent } from './property/property.component';

export const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: '', component: IntroComponent },
  { path: 'quan', component: QuanComponent },
  { path: 'qual', component: QualComponent },
  { path: 'property', component: PropertyComponent },
  { path: '**', component: NotfoundComponent },
];
