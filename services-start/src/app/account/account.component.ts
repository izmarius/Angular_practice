import { AccountServiceService } from './../account-service.service';
import { LoggingService } from './../logging.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountServiceService: AccountServiceService) {}

  onSetTo(status: string) {
    this.accountServiceService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
    this.accountServiceService.statusUpdated.emit(status);
  }
}
