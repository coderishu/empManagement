import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { AppComponent } from "./app.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { EmployeeDetailComponent } from "./components/employee-detail/employee-detail.component";
import { HeaderComponent } from "./shared/header/header.component";
import { LoginComponent } from "./components/login/login.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptor } from "./interceptors/loader.interceptor";
import { NgxSpinnerService, NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeDetailComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatPaginatorModule,
    AppRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    NgxSpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
