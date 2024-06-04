import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DasboardTermicaComponent } from './dasboard-termica.component';

const routes: Routes = [
  {
    path: '',
    component: DasboardTermicaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DashboardTermicaRoutingModule {}
