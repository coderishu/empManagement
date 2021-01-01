import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginGuard } from "./authentication/login.guard";
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { EmployeeDetailComponent } from "./components/employee-detail/employee-detail.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path: "", redirectTo: "/employee-list", pathMatch: "full" },
  { path: "employee-list", component: EmployeeListComponent },
  { path: "add-employee", component: AddEmployeeComponent },
  { path: "employee-detail", component: EmployeeDetailComponent },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
