import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'test', pathMatch: 'full'},
  {
    path: 'test',
    loadChildren: () => import('../app/components/test/test.routes').then((r) => r.usersRoutes)
  }
];
