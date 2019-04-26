
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Volunteer } from '../_models/volunteer';
import { VolunteerFetchService } from '../_services/volunteer-fetch.service';

@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.component.html',
  styleUrls: ['./volunteer-form.component.css']
})
export class VolunteerFormComponent implements OnInit {


  volunteer: Volunteer;

  constructor(
    private volunteerService: VolunteerFetchService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.volunteer = new Volunteer();
	this.initOptionalValues();
  }

  private initOptionalValues(){
	  this.volunteer.apt="n/a";
	  
  }
  saveVolunteer() {
    this.volunteerService.saveVolunteer(this.volunteer).toPromise().then(() => {
      window.location.reload();
    });
  }

  updateVolunteer(volunteer: Volunteer)
  {
    this.volunteerService.updateVolunteer(volunteer).toPromise().then(() => {
      window.location.reload();
    });
  }

  
  validateForm(){
	  var fail=true;
	  if(this.volunteer.firstName==null || this.volunteer.firstName	==""){
		  window.alert("Required field first name");
		  fail=false;
	  }
	  else if(this.volunteer.lastName==null || this.volunteer.lastName==""){
		   window.alert("Required field last name");
		  fail=false;
	  }
	  else if(this.volunteer.phone==null || this.volunteer.phone==""){
		  window.alert("Required field phone");
		  fail=false;
	  }
	  else if(this.volunteer.email==null || this.volunteer.email==""){
		   window.alert("Required field email");
		  fail=false;
	  }
	  else if(this.volunteer.address==null || this.volunteer.address==""){
		  window.alert("Required field address");
		  fail=false;
	  }
	  else if(this.volunteer.city==null ||this.volunteer.city==""){
		  window.alert("Required field city");
		  fail=false;
	  }
	  else if(this.volunteer.state==null || this.volunteer.state==""){
		  window.alert("Required field state");
		  fail=false;
	  }
	  else if(this.volunteer.zip==null || this.volunteer.zip==""){
		  window.alert("Required field zip code");
		  fail=false;
	  }
	  
	  
	  else if(this.volunteer.dob==null || this.volunteer.dob==""){
		  window.alert("Required field date of birth");
		  fail=false;
	  }
	  
	  	  
	 
	  if(fail){
		  this.saveVolunteer();
	  
		return true;
	  }else{
		  return false;
	  }
  }
}
