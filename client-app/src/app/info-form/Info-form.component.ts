import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../_models/member';
import { MemberFetchService } from '../_services/member-fetch.service';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit  {

  member: Member;

  constructor(private memberService: MemberFetchService,
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
