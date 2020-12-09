import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicLayoutComponent} from "../../layout/public-layout/public-layout.component";
import {DashboardComponent} from "./dashboard.component";


const routes: Routes = [
  {
    path: 'dashboard',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
