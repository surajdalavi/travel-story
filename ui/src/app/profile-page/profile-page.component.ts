import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { PostService, IPost } from "../services/post.service";
import { Observable } from "rxjs";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"],
})
export class ProfilePageComponent implements OnInit {
  post$: Observable<IPost[]> = this.postService.post$;
  coverPhoto = "../../assets/user/cover-photo.jpg";
  profilePhoto = "../../assets/user/phoebe.jpg";

  inputFileName: string;

  @ViewChild("fileUpload", { static: false })
  fileUpload: ElementRef;

  constructor(private postService: PostService) {}
  trackById(index, item) {
    return item.id;
  }
  ngOnInit() {}
  onFileSelected(event) {
    console.log("event::::::", event);
  }
  onClick(event) {
    if (this.fileUpload) this.fileUpload.nativeElement.click();
  }
}
