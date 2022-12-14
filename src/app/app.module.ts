import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './userDashboard/overview/overview.component';
import { AccountInfoComponent } from './userDashboard/account-info/account-info.component';
import { SendMoneyComponent } from './userDashboard/send-money/send-money.component';
import { ReceiveMoneyComponent } from './userDashboard/receive-money/receive-money.component';
import { TransactionComponent } from './userDashboard/transaction/transaction.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { LoginComponent } from './Authentication/login/login.component';
import { NavbarComponent } from './HomePage/navbar/navbar.component';
import { FooterComponent } from './HomePage/footer/footer.component';
import { HomeComponent } from './HomePage/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersuccessPageComponent } from './usersuccess-page/usersuccess-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { QuickLoanComponent } from './useDashboard/quick-loan/quick-loan.component';
import { LoanRequestComponent } from './Components/loan-request/loan-request.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    AccountInfoComponent,
    SendMoneyComponent,
    ReceiveMoneyComponent,
    TransactionComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UsersuccessPageComponent,
    QuickLoanComponent,
    LoanRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    NgxPaginationModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
