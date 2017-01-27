import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css'],
  providers: [ProfileService]
})

export class AddProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  submitForm(name: string, instrument: string, chair: string, bio: string) {
    var newProfile: Profile = new Profile(name, instrument, chair, bio);
    this.profileService.addProfile(newProfile);
  }

}
