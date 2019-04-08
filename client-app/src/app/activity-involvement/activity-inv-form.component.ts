import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ActivityFetchService } from '../_services/activity-fetch.service';
import { ActivityInvFetchService } from '../_services/activity-involvement-fetch.service';
import { ServicesComponent } from '.././services/services.component';

import { Activity } from '../_models/activity';
import { Involvement } from '../_models/involvement';
import { MemberFetchService } from '../_services/member-fetch.service';
import { MembersComponent } from '@app/members/members.component';


@Component({
    selector: 'app-activity-inv-form',
    templateUrl: './activity-inv-form.component.html',
    styleUrls: ['./activity-inv-form.component.css']
})
export class ActivityInvFormComponent implements OnInit{

    constructor(
        private activityService: ActivityFetchService,
        private activityInvService: ActivityInvFetchService,
        private memberService: MemberFetchService,
        private router: Router,
        @Inject(MAT_DIALOG_DATA) private data: any) { }

    public involvements;
    public involvement;
    public members;
    public involvementsByName: string[];
    public forPrinting: string[];

    ngOnInit() {

        // Getting all involvements from attached data
        //this.involvements = this.data.involvements;
		
        this.involvement = this.data.involvement;
        this.loadMembers();
		
		console.log("init");
        //this.involvementsByName = [];

    }
	
	

    updateInvolvement(involvement: Involvement, memberID: string) {
        this.involvementsByName = [];
        console.log("Involvement ID: " + involvement.id + " Member ID: " + memberID);
        this.activityInvService.updateInvolvement(involvement).toPromise().then(() => {
            //window.location.reload();
        });

        var dontAdd: boolean;
        dontAdd = false;

        // checks  if a member is already a part of an involvement
        involvement.memberIDs.forEach(element => {
            if (element === memberID) {
                console.log("Already a member!");
                dontAdd = true;
            }
        });

        // adds member if it's new to the activity
        if (dontAdd === false) {
            involvement.memberIDs.push(memberID);




            // converts array of IDs to array of names
			if((involvement.memberIDs!=null) && (this.members !=null)){
				for (var i = 0; i < involvement.memberIDs.length; i++) {
					for (var j = 0; j < this.members.length; j++) {
						if (involvement.memberIDs[i] === this.members[j].id) {
							this.involvementsByName.push(this.members[j].firstName)                      
						}
					}
				}
			}
        }
		this.viewMembers(this.involvement);
        this.forPrinting = this.involvementsByName;

        // prints out the list of members in an involvement
        this.forPrinting.forEach(element => {
            console.log("Name: " + element);
        })

        //this.forPrinting = this.involvementsByName;



    }
	
	
	private viewMembers(involvement: Involvement){
		this.involvementsByName = [];
		if((involvement.memberIDs!=null) && (this.members !=null)){
			for (var i = 0; i < involvement.memberIDs.length; i++) {
                for (var j = 0; j < this.members.length; j++) {
                    if (involvement.memberIDs[i] === this.members[j].id) {
                        this.involvementsByName.push(this.members[j].firstName)                      
                    }
                }
            }
		
		}
		
	}
	
	private removeMember(involvement: Involvement, memberID: string){
		
		for (var i = 0; i < involvement.memberIDs.length; i++) {
                
				if (involvement.memberIDs[i] === memberID) {
					this.involvement.memberIDs.splice(i,1);                 
				}
                
            }	
		
		this.viewMembers(this.involvement);
		this.forPrinting = this.involvementsByName;
	}

    private loadMembers() {
        this.memberService.getMembers().subscribe(
            data => { this.members = data; this.updateInvolvement(this.involvement, data[0].id) },
            err => console.error(err),
            () => console.log("members loaded.")
        );
    }
}
