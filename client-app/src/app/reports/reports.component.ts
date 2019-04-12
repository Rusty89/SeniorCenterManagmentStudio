import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//services to export
import { MemberFetchService } from '../_services/member-fetch.service';
import { VolunteerFetchService } from '../_services/volunteer-fetch.service';
import { ActivityFetchService } from '../_services/activity-fetch.service';
import { ActivityInvFetchService } from '../_services/activity-involvement-fetch.service';


//to save out as csv file
import { saveAs } from '../../../node_modules/file-saver/src/FileSaver';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  public members;
  public volunteers;  
  public activities;
  public involvements;
  
  
  constructor(private memberService: MemberFetchService, 
	private volunteerService: VolunteerFetchService,
	private activityService: ActivityFetchService,
    private activityInvService: ActivityInvFetchService) { }

  ngOnInit() {
	  this.loadMembers();
	  this.loadVolunteers();
	  this.loadActivities();
	  this.loadInvolvements();
	  
  }
  
  public exportToCSV(data:any, fileName: string){
	    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
		const header = Object.keys(data[0]);
		let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
		csv.unshift(header.join(','));
		let csvArray = csv.join('\r\n');

		var a = document.createElement('a');
		var blob = new Blob([csvArray], {type: 'text/csv' }),
		url = window.URL.createObjectURL(blob);

		a.href = url;
		a.download = fileName;
		a.click();
		window.URL.revokeObjectURL(url);
		a.remove();
  }
  
  
  private loadMembers() {
    this.memberService.getMembers().subscribe(
      data => { this.members = data },
      err => console.error(err),
      () => console.log("members loaded.")
    );
	
  }
  
  private loadVolunteers() {
    this.volunteerService.getVolunteers().subscribe(
      data => { this.volunteers = data },
      err => console.error(err),
      () => console.log("volunteers loaded.")
    );
  }
  
  private loadActivities() {
    this.activityService.getActivities().subscribe(
      data => { this.activities = data },
      err => console.error(err),
      () => console.log("activities loaded.")
    );
  }


  private loadInvolvements() {
    this.activityInvService.getInvolvements().subscribe(
      data => { this.involvements = data },
      err => console.error(err),
      () => console.log("involvements loaded.")
    );

  }

}
