import { Component, inject } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile-form',
  imports: [],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {
  private profileService = inject(ProfileService);

  onUpdateProfile(profile: Profile): void {
    this.profileService.setProfile(profile);
  }
}
