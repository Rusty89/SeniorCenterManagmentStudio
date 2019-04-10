
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
    
    this.initOptionalValues();
	this.initCheckBoxes();
  }

   private initOptionalValues()
  {
    

    // APARTMENT: String
    this.member.apt="n/a";

    

    // EMERGENCY CONTACT
    // -------------------------------------------------------------- //
    // EMERGENCY CONTACT NAME: String
    this.member.emrgName="n/a";

    // EMERGENCY CONTACT RELATION: String
    this.member.emrgRelation="n/a";

    // EMERGENCY CONTACT PHONE #: Int or String
    this.member.emrgPhone="n/a";

    // EMERGENCY CONTACT EMAIL
    this.member.emrgEmail="example@AOL.com";
    // -------------------------------------------------------------- //

  

   

    // ARE YOU DISABLED AND LIVING WITH SOMEONE 60+?
    this.member.AYDALWS="n/a";

   

    

    // NUMBER IN HOUSEHOLD: Int or String
    this.member.numInHousehold="n/a";

  

    // DO YOU REQUIRE ANY SPECIAL ASSISTANCE (Activies of Daily Living/Instrumental Activities of Daily Living)
    this.member.DYRASA="n/a";


    // COMMENTS/NOTES:
    this.member.notes="n/a";


    // START DATE: String
    this.member.startDate="0000-00-00";

	// DELIVERY LENGTH: 
    this.member.deliveryLength="n/a";

    // PLEASE SPECIFY: String
    this.member.pleaseSpecify="n/a" ;
    // ---------------------------------------------------------------------- //

    // ADDITIONAL MEAL INSTRUCTIONS: String
    this.member.AMI="n/a";

    // DRIVER INSTRUCTIONS: String
    this.member.driverInstr="n/a";

    // ADDITIONAL COMMENTS: String
    this.member.additComm="n/a";

    // PRIMARY DOCTOR OFFICE NAME: String
    this.member.PDON="n/a";

    // PRIMARY DOCTOR NAME: String
    this.member.PDN="n/a";

    // DOCTOR PHONE NUMBER: Int or String
    this.member.DPN="n/a";

    // DOCTOR EMAIL: String
    this.member.DE="n/a";
	
	 // MONTHLY HOUSEHOLD INCOME
    this.member.monthlyHouseholdIncome="n/a";
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

  // Saving member
  saveMember() {
    this.memberService.saveMember(this.member).toPromise().then(() => {
      window.location.reload();
    });
  }

  // Updating member
  updateMember(member: Member) {
    this.memberService.updateMember(member).toPromise().then(() => {
      window.location.reload();
    });
  }
  
  validateForm(){
	  var fail=true;
	  if(this.member.firstName==null || this.member.firstName	==""){
		  window.alert("Required field first name");
		  fail=false;
	  }
	  else if(this.member.lastName==null || this.member.lastName==""){
		   window.alert("Required field last name");
		  fail=false;
	  }
	  else if(this.member.phone==null || this.member.phone==""){
		  window.alert("Required field phone");
		  fail=false;
	  }
	  else if(this.member.email==null || this.member.email==""){
		   window.alert("Required field email");
		  fail=false;
	  }
	  else if(this.member.address==null || this.member.address==""){
		  window.alert("Required field address");
		  fail=false;
	  }
	  else if(this.member.city==null ||this.member.city==""){
		  window.alert("Required field city");
		  fail=false;
	  }
	  else if(this.member.state==null || this.member.state==""){
		  window.alert("Required field state");
		  fail=false;
	  }
	  else if(this.member.zip==null || this.member.zip==""){
		  window.alert("Required field zip code");
		  fail=false;
	  }
	  
	  
	  else if(this.member.dob==null || this.member.dob==""){
		  window.alert("Required field date of birth");
		  fail=false;
	  }
	  
	  	  
	 
	  if(fail){
		  this.saveMember();
	  
		return true;
	  }else{
		  return false;
	  }
	  
  }

  // OLD PART OF CODE, I WOULD KEEP IT FOR NOW
  // ------------------------------------------------------------------------------------------ //
  /*
  updateMember(memberID: string)
  {
    // Delete activity by email
    this.deleteMember(memberID);

    // Add new activity
    this.memberService.saveMember(this.data.member).toPromise().then(() => {
      window.location.reload();
    });
  }

  deleteMember(memberID: string) {
    this.memberService.deleteMember(memberID).subscribe(() => {

    });
  }
  */

}
