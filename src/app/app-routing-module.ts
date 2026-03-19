import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './componenti/home/home';
import { About } from './componenti/about/about';
import { Contact } from './componenti/contact/contact';
import { Contatto } from './componenti/contatto/contatto';
import { NotFound } from './componenti/not-found/not-found';
import { authGuard } from './auth/auth-guard';
import { authAdminGuard } from './auth/auth-admin-guard';
import { Login } from './componenti/login/login';
import { Registrazione } from './componenti/registrazione/registrazione';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/login'},
  {path:'login' , component:Login},
  {path:'register' , component:Registrazione},
  {path:'home' , component:Home },
  {path:'about', component:About},
  {path:'contact', component:Contact, canActivate:[authGuard], children:[
    {path:':id', component:Contatto, canActivate:[authAdminGuard]}
  ]},
  {path:'404', component:NotFound},
  {path:'**', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
