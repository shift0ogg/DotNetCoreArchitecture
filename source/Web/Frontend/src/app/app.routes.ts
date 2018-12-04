import { Routes } from "@angular/router";
import { AuthenticationGuard } from "./core/guards/authentication.guard";
import { LayoutMainComponent } from "./core/layouts/layout-main.component";
import { LayoutComponent } from "./core/layouts/layout.component";
import { LoginComponent } from "./views/login/login.component";

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            { path: "", component: LoginComponent }
        ]
    },

    {
        path: "main",
        component: LayoutMainComponent,
        canActivate: [AuthenticationGuard],
        children: [
            { path: "form", loadChildren: "./views/main/form/form.module#FormModule" },
            { path: "home", loadChildren: "./views/main/home/home.module#HomeModule" },
            { path: "service", loadChildren: "./views/main/service/service.module#ServiceModule" },
            { path: "upload", loadChildren: "./views/main/upload/upload.module#UploadModule" },
            { path: "validation", loadChildren: "./views/main/validation/validation.module#ValidationModule" }
        ]
    },

    { path: "**", redirectTo: "" }
];
