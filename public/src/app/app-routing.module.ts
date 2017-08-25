import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'main', pathMatch: 'full', component: MainComponent },
  { path: 'red', pathMatch: 'full', component: RedComponent },
  { path: 'blue', pathMatch: 'full', component: BlueComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
