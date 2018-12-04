import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "src/app/core/core.module";
import { ValidationDirectiveModule } from "src/app/directives/validation/validation.directive.module";
import { ValidationComponent } from "./validation.component";

const routes: Routes = [
    { path: "", component: ValidationComponent }
];

@NgModule({
    declarations: [ValidationComponent],
    imports: [
        RouterModule.forChild(routes),
        CoreModule,
        ValidationDirectiveModule
    ]
})
export class ValidationModule { }
