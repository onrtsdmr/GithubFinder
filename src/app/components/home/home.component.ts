import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private toast: ToastrService, private route: Router) {
  }

  ngOnInit(): void {
  }

  searchUser(username: string) {
    if (username.length == 0) {
      this.toast.error("Please enter username");
      return;
    }
    this.route.navigate(['/dashboard'], {state: {data: username}});
  }

}
