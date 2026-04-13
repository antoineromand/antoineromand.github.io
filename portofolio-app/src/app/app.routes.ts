import {Routes} from '@angular/router';
import {HomePage} from './pages/home/home-page';
import {ProjectsPage} from './pages/projects/projects-page';

export const routes: Routes = [
  {component: HomePage, path: ''},
  {component: ProjectsPage, path: 'projects'},
  {component: HomePage, path: 'about'},
  {component: HomePage, path: 'contact'},
];
