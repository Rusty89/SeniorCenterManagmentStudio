
import { Component } from '@angular/core';

import { Info }    from '../Info';

@Component({
  selector: 'app-Info-form',
  templateUrl: './Info-form.component.html',
  styleUrls: ['./Info-form.component.css']
})
export class InfoFormComponent {

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }
}