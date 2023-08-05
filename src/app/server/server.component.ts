import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-server",
    template: `
        <app-server></app-server>
        <app-server></app-server>`,
    // styleUrls: "./server.component.css",
    templateUrl: "./server.component.html",
})
export class ServerComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        
    }
}