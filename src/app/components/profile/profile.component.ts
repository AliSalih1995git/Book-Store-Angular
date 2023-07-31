import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileData: any;

  constructor(private service: AuthService) {}

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData() {
    this.service.getProfile().subscribe(
      (res) => {
        this.profileData = res;
        console.log(res, 'Profile data');
      },
      (error) => {
        console.error('Error fetching profile data:', error);
      }
    );
  }
}
