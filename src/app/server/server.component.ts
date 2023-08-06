import { Component } from "@angular/core";

@Component({
    selector: "app-servers",
    // template: `
    //     <app-server></app-server>
    //     <app-server></app-server>`,
    // styleUrls: "./server.component.css",
    templateUrl: "./server.component.html",
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";

    getServerStatus() {
        return this.serverStatus;
    }
}