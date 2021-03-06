import { Component } from "@angular/core";
import { SignInModel } from "src/app/models/signIn.model";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({ selector: "app-login", templateUrl: "./login.component.html" })
export class LoginComponent {
    signIn = new SignInModel();

    constructor(private readonly authenticationService: AuthenticationService) {
        this.signIn.login = "admin";
        this.signIn.password = "admin";
    }

    ngSubmit() {
        this.authenticationService.signIn(this.signIn);
    }
}
