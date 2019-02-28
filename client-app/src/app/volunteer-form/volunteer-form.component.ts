
import { Component } from '@angular/core';

import { Info }    from '../Info';

@Component({
  selector: 'app-Volunteer-form',
  templateUrl: './Volunteer-form.component.html',
  styleUrls: ['./Volunteer-form.component.css']
})
export class VolunteerFormComponent {

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }
}
