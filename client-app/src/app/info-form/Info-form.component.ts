import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../_models/member';
import { MemberFetchService } from '../_services/member-fetch.service';

import {MAT_DIALOG_DATA} from '@angular/material'
import { Inject } from '@angular/core';


@Component({
  selector: 'app-info-form',
  templateUrl: './Info-form.component.html',
  styleUrls: ['./Info-form.component.css']
})
export class InfoFormComponent implements OnInit  {

  member: Member;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private memberService: MemberFetchService,
    private router: Router) { }




  ngOnInit() {
    this.member = new Member();
  }

  saveMember() {
    this.memberService.saveMember(this.member).toPromise().then(() => {
      this.router.navigate(['members']);
    });
  }
}
