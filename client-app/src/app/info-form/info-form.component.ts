
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Member } from '../_models/member';
import { MemberFetchService } from '../_services/member-fetch.service';




@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit  {

  member: Member;

  constructor(
    private memberService: MemberFetchService,
    private router: Router,

    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
    this.member = new Member();
  }

  saveMember() {
    this.memberService.saveMember(this.member).toPromise().then(() => {
      //this.router.navigate(['members']);

      window.location.reload();

    });
  }


  updateMember(memberEmail: string)
  {
    // Delete activity by email
    this.memberService.deleteMember(this.data.member.email);

    // Add new activity
    this.memberService.saveMember(this.data.member).toPromise().then(() => {

      window.location.reload();

    });
  }

}
