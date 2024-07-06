import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  {
    path: 'example',
    loadComponent: () => import('./features/example/example.component').then(m => m.ExampleComponent),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: '**',
    loadComponent: () =>
      import('./features/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
  },
];
