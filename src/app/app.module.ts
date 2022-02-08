import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { CatalogModule } from "./catalog/catalog.module";
import { AppComponent } from "./app.component";
import { appRoutes } from "./routes";
import { RegisterComponent } from "./users/register.component";
import { SignInComponent } from "./users/sign-in.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    CatalogModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent, RegisterComponent, SignInComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
