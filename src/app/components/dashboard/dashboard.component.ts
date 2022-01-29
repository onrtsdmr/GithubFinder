import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Github} from "../../shared/model/github";
import {GithubService} from "../../shared/service/github.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  username: string;
  data: Github;

  constructor(private router: Router, private toast: ToastrService, private githubService: GithubService) {
    let data = this.router.getCurrentNavigation().extras.state;
    if (data == undefined) {
      this.router.navigate(['/home']);
      return;
    }
    this.username = data.data;

  }

  ngOnInit(): void {
    this.githubService.getUserInformation(this.username).subscribe(
      res => {
        this.data = res;
        console.log(this.data);
      },
      error => {
        if (error.status == 404){
          this.router.navigate(['/not-found']);
          return;
        }
        this.toast.error(error.error.message);
      },
    );
  }

}
