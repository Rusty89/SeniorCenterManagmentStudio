import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-activity-form',
  templateUrl: './Activity-form.component.html',
  styleUrls: ['./Activity-form.component.css']
})
export class ActivityFormComponent {

  submitted = false;

  onSubmit() { this.submitted = true; }
}
