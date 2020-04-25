import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashHomeComponent } from './components/dash-home/dash-home.component';
import { ChatComponent } from './components/chat/chat.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { KYCDetailComponent } from './components/kycdetail/kycdetail.component';
import { AccountCreateComponent } from './components/account-create/account-create.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full',
    component:HomeComponent
  },
{
  path:'home',
  component:HomeComponent
  
},
  {
  path:'login',
  component:LoginComponent
  }
  ,{
    path:'register',
    component:RegisterComponent
  },
  {
    path:'kyc',
    component:KYCDetailComponent
  },{
path:'account',
component:AccountCreateComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'',
        component:DashHomeComponent
      },
      {
        path:'chat',
        component:ChatComponent
      },
      {
        path:'wallet',
        component:WalletComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
