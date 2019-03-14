import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoFormComponent } from '.././info-form/Info-form.component';

import { MemberFetchService } from '../api-services/member-fetch.service';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private memberService: MemberFetchService, private router:Router,public dialog: MatDialog) { }

  public members;

  ngOnInit() {
	  this.loadMembers();
  }

  private loadMembers() {
    this.memberService.getMembers().subscribe(
      data => { this.members = data },
      err => console.error(err),
      () => console.log("members loaded.")
    );
  }

  deleteMember(memberEmail: string) {
    this.memberService.deleteMember(memberEmail).subscribe(() => {
      this.loadMembers();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InfoFormComponent, {
      
      
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  
}
