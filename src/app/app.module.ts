import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Material } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashHomeComponent } from './components/dash-home/dash-home.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NotificationComponent } from './components/notification/notification.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ChatComponent } from './components/chat/chat.component';
import { AddServicesComponent } from './components/add-services/add-services.component';
import { HttpClientModule } from '@angular/common/http';
import { KYCDetailComponent } from './components/kycdetail/kycdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    DashHomeComponent,
    NotificationComponent,
    TransactionComponent,
    WalletComponent,
    ChatComponent,
    AddServicesComponent,
    KYCDetailComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    Material,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
