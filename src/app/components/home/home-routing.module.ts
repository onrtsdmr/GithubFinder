import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicLayoutComponent} from "../../layout/public-layout/public-layout.component";
import {HomeComponent} from "./home.component";


const routes: Routes = [
  {
    path: 'home',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
