import { AccountServiceService } from './../account-service.service';
import { LoggingService } from './../logging.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountServiceService: AccountServiceService
  ) {
    this.accountServiceService.statusUpdated.subscribe(
      (status: string) => alert('New status ' + status)
      );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountServiceService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
