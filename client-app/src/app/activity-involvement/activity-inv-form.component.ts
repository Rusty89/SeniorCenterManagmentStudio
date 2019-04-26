import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';

import { ActivityFetchService } from '../_services/activity-fetch.service';
import { ActivityInvFetchService } from '../_services/activity-involvement-fetch.service';

import { Involvement } from '../_models/involvement';
import { MemberFetchService } from '../_services/member-fetch.service';


@Component({
    selector: 'app-activity-inv-form',
    templateUrl: './activity-inv-form.component.html',
    styleUrls: ['./activity-inv-form.component.css']
})
export class ActivityInvFormComponent implements OnInit {

    constructor(
        private activityService: ActivityFetchService,
        private activityInvService: ActivityInvFetchService,
        private memberService: MemberFetchService,
        private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    public involvements;
    public involvement;
    public members;
    public involvementsByName: string[];
    public forPrinting: string[];

    ngOnInit() {

        // getting all involvements from attached data		
        this.involvement = this.data.involvement;
        this.members = this.loadMembers();

        this.viewMembers(this.involvement);
    }



    updateInvolvement(involvement: Involvement, memberID: string) {
        this.involvementsByName = [];
        console.log("Involvement ID: " + involvement.id + " Member ID: " + memberID);

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

        }
        this.viewMembers(this.involvement);
        this.forPrinting = this.involvementsByName;

        // prints out the list of members in an involvement
        this.involvementsByName.forEach(element => {
            console.log("Name: " + element);
        })
    }

    private viewMembers(involvement: Involvement) {
        this.involvementsByName = [];
        if ((this.involvement.memberIDs != null) && (this.members != null)) {
            for (var i = 0; i < this.involvement.memberIDs.length; i++) {
                for (var j = 0; j < this.members.length; j++) {
                    if (this.involvement.memberIDs[i] === this.members[j].id) {
                        this.involvementsByName.push(this.members[j].firstName.concat(" ".concat(this.members[j].lastName)))
                    }
                }
            }

        }

    }

    private removeMember(involvement: Involvement, memberID: string) {
        if (memberID === null) {

            for (var i = 0; i < involvement.memberIDs.length; i++) {

                if (involvement.memberIDs[i] === memberID) {
                    this.involvement.memberIDs.splice(i, 1);
                }

            }

            this.viewMembers(this.involvement);
            this.forPrinting = this.involvementsByName;
        }
        else {

            for (var i = 0; i < involvement.memberIDs.length; i++) {

                if (involvement.memberIDs[i] === memberID) {
                    if (confirm("Are you sure you want to remove this member from this activity? ")) {
                        this.involvement.memberIDs.splice(i, 1);

                    }

                }

            }

            this.viewMembers(this.involvement);
            this.forPrinting = this.involvementsByName;

        }

    }

    private dummyFunction() {

    }

    private loadMembers() {
        this.memberService.getMembers().subscribe(
            data => { this.members = data },
            err => console.error(err),
            () => console.log("members loaded.")
        );

    }
}
