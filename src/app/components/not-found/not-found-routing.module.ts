import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicLayoutComponent} from "../../layout/public-layout/public-layout.component";
import {NotFoundComponent} from "./not-found.component";


const routes: Routes = [
  {
    path: 'not-found',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule {
}
