
import { Component } from '@angular/core';

@Component({
  selector: 'app-Activity-form',
  templateUrl: './Activity-form.component.html',
  styleUrls: ['./Activity-form.component.css']
})
export class ActivityFormComponent {

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }
}
