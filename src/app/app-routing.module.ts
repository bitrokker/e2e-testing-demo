import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {OverviewComponent} from "./components/overview/overview.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'overview', component: OverviewComponent },
  // redirect to /home
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
