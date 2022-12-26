import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Account } from 'src/app/Model/account';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
})
export class AccountInfoComponent implements OnInit {
  trans: any;
  userName: any;
  acct: any;
  account: any[] = [];
  userAcct: Account = {
    id: 0,
    fullName: '',
    email: '',
    phoneNumber: 0,
    country: '',
    state: '',
    address: '',
    password: '',
    gender: '',
    dateOfBirth: new Date(),
    accountNumber: 0,
    bankName: '',
    accountBalance: 0,
    accountType: '',
    transactionPin: 0,
    dateCreated: new Date(),
    lastUpdated: new Date(),
    lastLoggedIn: new Date(),
    token: '',
    role: '',
  };
  constructor(
    private route: Router,
    private accountService: AccountService,
    public activatedRoute: ActivatedRoute, private toast: NgToastService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id: any = params.get('id');
      // alert(id);
      if (id) {
        this.accountService.GetAccountById(id).subscribe({
          next: (res) => {
            this.userAcct = res;
            console.log(this.userAcct, 'ACTIVATED ROUTE');
          },
        });
      }
    });

    this.accountService.getAllAccount().subscribe((data: any) => {
      this.acct = data;
      console.log(data, 'ALL ACCOUNTS ----');
    });

    this.accountService.getAllTransfer().subscribe((data: any) => {
      this.trans = data;
      console.log(data, 'ALL TRANSFER ----');
    });

    this.accountService.getAllAccount().subscribe((res: any) => {
      this.account = res;
      console.log(res, 'GETTING ALL USERS');
      console.log(this.account, 'GETTING ALL USERS');
    });
  }
  GetAcctById(id: any) {
    this.accountService.GetAccountById(id).subscribe({
      next: (data) => {
        this.acct = data;

        console.log(this.acct.firstName, 'TESTING USER INFO ---');
        return data;
      },
    });
  }

  logout() {
    this.accountService.logout();
  }

  updateUser() {
    this.accountService.updateUser(this.userAcct.id, this.userAcct).subscribe({
      next: (response) => {
        console.log(response, 'CHECKING RESPONSE--ffgg---');
        
          window.location.reload();
          this.toast.success({
            detail: 'Updated Successfully',
            summary: 'Profile Info Updated',
            duration: 4000,
          });
        
      },
      error: (errors) => {
        console.log(errors, 'CHECKING ERRORS-----');
        this.toast.error({
          detail: 'Oops! An error occurred',
          summary: 'Please try again later',
          duration: 4000,
        });
      },
    });
  }
}
