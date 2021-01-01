import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/main.service";
import { appConstant } from "src/app/constant/app.constant";

@Component({
  selector: "app-employee-detail",
  templateUrl: "./employee-detail.component.html",
  styleUrls: ["./employee-detail.component.css"],
})
export class EmployeeDetailComponent implements OnInit {
  empDetail = {};
  constructor(private service: MainService) {}

  ngOnInit() {
    this.employeeDetail();
  }
  employeeDetail() {
    let URL = appConstant.baseUrl;
    let id = localStorage.getItem("empId");
    this.service.getRequest(URL + `api/users/${id}`).subscribe((result) => {
      this.empDetail = result.data;
    });
  }
}
