import { Component } from '@angular/core';

@Component({
  selector: '.app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID = 123;
  serverName = "Intel Pentium";
  allowToAddServer = false;
  serverCreationStatus = "No Server Created";

  getServerName() {
    return this.serverName;
  }

  addServer() {
    this.serverCreationStatus = "Server got created with server ID : " + this.serverID + " and server name : " + this.serverName;
  }

  enterServerID(event : Event) {
    console.log(event);
    this.serverID = (<HTMLInputElement>event.target).value;
  }

  constructor() {
    setTimeout(() => {
      this.allowToAddServer = true;
    }, 1000)
  }
}