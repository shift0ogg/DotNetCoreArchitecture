import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "src/app/core/core.module";
import { LoginComponent } from "./login.component";

const routes: Routes = [
    { path: "", component: LoginComponent }
];

@NgModule({
    declarations: [LoginComponent],
    imports: [
        RouterModule.forChild(routes),
        CoreModule
    ]
})
export class LoginModule { }
