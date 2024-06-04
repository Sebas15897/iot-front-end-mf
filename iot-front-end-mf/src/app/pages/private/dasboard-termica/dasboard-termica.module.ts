import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardTermicaComponent } from './dasboard-termica.component';
import { DashboardTermicaRoutingModule } from './dasboard-termica-routing.module';

@NgModule({
  declarations: [DasboardTermicaComponent],
  imports: [CommonModule, DashboardTermicaRoutingModule],
})

export class DashboardTermicaModule {}
