import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthPrivateGuard } from '../../core/guards/auth-private-guard/auth-private.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        title: 'Home',
        loadChildren: () =>
          import('./home/home.module').then((module) => module.HomeModule),
      },
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadChildren: () =>
          import('./dasboard/dasboard.module').then(
            (module) => module.DashboardModule
          ),
      },
    ],
    canActivate: [AuthPrivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PrivateRoutingModule {}
