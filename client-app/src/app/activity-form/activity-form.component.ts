import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent {

  submitted = false;

  onSubmit() { this.submitted = true; }
}
