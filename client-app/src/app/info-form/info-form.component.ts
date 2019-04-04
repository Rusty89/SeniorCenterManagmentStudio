
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

    // Init check-boxes
    this.initCheckBoxes();
    
  }

  private initCheckBoxes()
  {
    // We have to specify default values for check boxes
    // --------------------------------------------------- //
    this.member.isSpouse = "No";
    this.member.isDisabled = "No";
    this.member.AYDALWS = "No";
    this.member.isVeteran = "No";
    this.member.isOnePersonCaregiver = "No";
    this.member.AYRSUNFCSP = "No";
    this.member.DYRASA = "No";
    this.member.servicesRequired = "No";
    this.member.WTMBUMOW = "No";
    this.member.HTUMB = "No";
    this.member.microwave = "No";
    this.member.isAllergies = "No";

    this.member.race = "Other";
    this.member.ethnicity = "Other";
    this.member.gender = "Other";
    this.member.caregiver = "Other";
    this.member.deliveryType = "Delivery";
    this.member.deliveryDays = "Friday";
    this.member.mealType = "Low Sodium";
    this.member.milkType = "No Milk"; 
    // --------------------------------------------------- //
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
