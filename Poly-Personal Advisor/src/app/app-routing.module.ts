import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { GraphComponent } from './components/graph/graph.component';

const routes: Routes = [ 
  {path: 'home',component: HomeComponent},
  {path: 'client',component: ClientComponent},
  {path: 'graph/:id',component: GraphComponent},
  {path: '**',pathMatch: 'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
