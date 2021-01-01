import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MainService } from "src/app/services/main.service";
import { appConstant } from "../../../app/constant/app.constant";
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  hidePagination: Boolean = false;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize = 6;
  empList = [];
  totalEmployee;
  constructor(private service: MainService, private router: Router) {}

  ngOnInit() {
    this.employeeList(1);
  }
  employeeList(page) {
    let URL = appConstant.baseUrl;
    this.service
      .getRequest(URL + `api/users?page=${page}`)
      .subscribe((result) => {
        this.empList = result["data"];
        this.totalEmployee = result["total"];
      });
  }
  detail(id) {
    this.router.navigate(["/employee-detail"]);
    localStorage.setItem("empId", id);
  }
  pageChange(e) {
    // if ((this.empList.length = 0)) {
    //   return;
    // }
    if (e.pageSize >= 6) {
      this.employeeList(e.pageIndex + 1);
    } else if (e.pageSize < 6) {
      this.hidePagination = true;
    }
  }
}
