import { Routes } from "@angular/router";
import { AppGuard } from "./core/guards/guard";
import { AppLayoutMainComponent } from "./core/layouts/layout-main.component";
import { AppLayoutComponent } from "./core/layouts/layout.component";
import { AppLoginComponent } from "./views/login/login.component";

export const routes: Routes = [
    {
        children: [
            { path: "", component: AppLoginComponent }
        ],
        component: AppLayoutComponent,
        path: ""
    },

    {
        canActivate: [AppGuard],
        children: [
            { path: "home", loadChildren: "./views/main/home/home.module#AppHomeModule" },
            { path: "rxjs", loadChildren: "./views/main/rxjs/rxjs.module#AppRxjsModule" },
            { path: "validate", loadChildren: "./views/main/validate/validate.module#AppValidateModule" },
            { path: "form", loadChildren: "./views/main/form/form.module#AppFormModule" },
            { path: "service", loadChildren: "./views/main/service/service.module#AppServiceModule" },
            { path: "file", loadChildren: "./views/main/file/file.module#AppFileModule" }
        ],
        component: AppLayoutMainComponent,
        path: "main"
    },

    { path: "**", redirectTo: "" }
];
