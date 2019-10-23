import { Component } from '@angular/core';

@Component({
  selector: '.app-server',
  templateUrl: './server.component.html',
  styles: [`
    .colorWhite {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverID = 0;
  serverName = "Intel Pentium";
  allowToAddServer = false;
  serverCreationStatus = "No Server Created";
  isServerCreated = false;
  servers = [];

  getServerName() {
    return this.serverName;
  }

  addServer() {
    this.serverID = Math.random();
    this.serverCreationStatus = "Server got created with server ID : " + this.serverID + " and server name : " + this.serverName;
    this.servers.push(this.serverCreationStatus);
  }

  enterServerID(event : Event) {
     this.isServerCreated = true;
    this.serverID = Number.parseInt((<HTMLInputElement>event.target).value);
  }

  constructor() {
    setTimeout(() => {
      this.allowToAddServer = true;
    }, 1000)
  }

  getStyle() {
    return this.serverID > 0.5? 'green': 'red';
  }
}