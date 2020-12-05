import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {
  allowServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Server has no name';

  // tslint:disable-next-line:typedef
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  // tslint:disable-next-line:typedef
  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }
}
