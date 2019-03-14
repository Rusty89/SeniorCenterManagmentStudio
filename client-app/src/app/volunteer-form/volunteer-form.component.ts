import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Info }    from '../Info';



@Component({
  selector: 'app-Volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.css']
})
export class VolunteerFormComponent {

  submitted = false;

  onSubmit() { this.submitted = true; }

  
  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }
}

