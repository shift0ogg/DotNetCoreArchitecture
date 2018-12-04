import { Component } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({ selector: "app-nav", templateUrl: "./nav.component.html" })
export class NavComponent {
    constructor(private readonly authenticationService: AuthenticationService) { }

    signOut() {
        this.authenticationService.signOut();
    }
}
