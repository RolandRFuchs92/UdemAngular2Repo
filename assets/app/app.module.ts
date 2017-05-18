import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule}    from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule }       from '@angular/core';

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.compnent";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { HeaderComponent } from "./shared/header.component";
import { routing } from "./app.routing";
import {MessageModule} from "./messages/message.module";


@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        MessageModule
    ],
    providers: [
        AuthService,
        ErrorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
