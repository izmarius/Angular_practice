import { AccountServiceService } from './account-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[];

  constructor(private accountServiceService: AccountServiceService) {}

  ngOnInit() {
    this.accounts = this.accountServiceService.accounts;
  }
}
