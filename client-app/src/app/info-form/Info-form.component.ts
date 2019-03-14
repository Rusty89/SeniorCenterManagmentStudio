import { Component } from '@angular/core';
import { Info }    from '../Info';
import { Router } from '@angular/router';
import { Member } from '../models/member';
import { MemberFetchService } from '../api-services/member-fetch.service';


@Component({
  selector: 'app-Info-form',
  templateUrl: './Info-form.component.html',
  styleUrls: ['./Info-form.component.css']
})
export class InfoFormComponent {

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

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }
}
