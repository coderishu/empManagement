import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { appConstant } from "src/app/constant/app.constant";
import { MainService } from "src/app/services/main.service";

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.css"],
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild("fileInput", { static: false }) el: ElementRef;
  imageUrl: any = "https://i.ibb.co/fDWsn3G/buck.jpg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  model: any = {};
  constructor(private cd: ChangeDetectorRef, private service: MainService) {}

  ngOnInit() {}

  onSubmit() {
    let URL = appConstant.baseUrl;
    this.service
      .createPostRequest(URL + "api/users", this.model)
      .subscribe((res) => {
        console.log(res);
      });
  }
  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.model["avatar"] = this.imageUrl;
        this.editFile = false;
        this.removeUpload = true;
      };
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }
}
