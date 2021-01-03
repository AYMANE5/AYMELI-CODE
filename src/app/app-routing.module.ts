import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AymeliCodeComponent } from './aymeli-code/aymeli-code.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [

  {
    path:'',
    redirectTo : '/',
    pathMatch: 'full'

  },

{
  path:'',
component: AuthComponent
},

{
  path:'m',
component: AymeliCodeComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
