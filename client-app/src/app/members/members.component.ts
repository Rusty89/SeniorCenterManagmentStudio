import { Component, OnInit } from '@angular/core';
import { MemberFetchService } from '../_services/member-fetch.service';

import { UserAuthenticationDataService } from '../_services/user-authentication-data.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  constructor(
    private memberService: MemberFetchService, 
    private userAuthDataService: UserAuthenticationDataService
    ) {}
  
  public members;
  public userMap;

  ngOnInit() {
    this.loadMembers();
    
    // TEST
    this.loadPasswords();
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

  // TEST
  // ================================================================ //
  private loadPasswords() {
    console.log("loadPassword()")
    this.userAuthDataService.getPasswords().subscribe(
      data => { this.userMap = data },
      err => console.error("passwords IS NOT loaded: " + err),
      () => console.log("passwords loaded.")
    );
  }
  // ================================================================ //

}
