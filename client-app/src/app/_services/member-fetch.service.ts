import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Member } from '../_models/member';


// NEW: API for
const API_URL: string = 'https://5z47iau9oe.execute-api.us-east-1.amazonaws.com/SCMS/member';

// NEW: API only for updating single member
const API_URL_UPDATE = 'https://5z47iau9oe.execute-api.us-east-1.amazonaws.com/SCMS/member-update';


@Injectable()
export class MemberFetchService {

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get(API_URL)
      .map((members: Array<String>) => {
        let memberMap: Member[] = [];
        members && members.forEach((member) => {
          memberMap.push({

            // NAME: String
            firstName: member['md_fname'],
            lastName: member['md_lname'],

            // PHONE #: Int or String
            phone: member['md_phone'],

            // EMAIL: String
            email: member['md_email'],

            // ADDRESS: String
            address: member['md_address'],

            // APARTMENT: String
            apt: member['md_apt'],

            // CITY: String
            city: member['md_city'],

            // STATE: String
            state: member['md_state'],

            // ZIP: Int or String
            zip: member['md_zip_code'],

            // EMERGENCY CONTACT
            // -------------------------------------------------------------- //
            // EMERGENCY CONTACT NAME: String
            emrgName: member['md_emrg_name'],

            // EMERGENCY CONTACT RELATION: String
            emrgRelation: member['md_emrg_relation'],

            // EMERGENCY CONTACT PHONE #: Int or String
            emrgPhone: member['md_emrg_phone'],

            // EMERGENCY CONTACT EMAIL
            emrgEmail: member['md_emrg_email'],
            // -------------------------------------------------------------- //

            // DOB: String
            dob: member['md_dob'],

            // IS SPOUSE 60yo+?: Checkbox
            isSpouse: member['md_is_spouse'],

            // DISABLED STATUS: Checkbox
            isDisabled: member['md_is_disabled'],

            // ARE YOU DISABLED AND LIVING WITH SOMEONE 60+?
            AYDALWS: member['md_AYDALWS'],

            // VETERAN STATUS: Checkbox
            isVeteran: member['md_is_veteran'],

            // RACE: Checkbox
            race: member['md_race'],

            // ETHNICITY: Checkbox
            ethnicity: member['md_ethnicity'],

            // GENDER: Checkbox
            gender: member['md_gender'],

            // NUMBER IN HOUSEHOLD: Int
            numInHousehold: member['md_NIH'],

            // IS ONE PERSON A CAREGIVER?: Checkbox
            isOnePersonCaregiver: member['md_IOPC'],

            // MONTHLY HOUSEHOLD INCOME: Checkbox
            monthlyHouseholdIncome: member['md_monthly_household_income'],

            //ARE YOU RECEIVING SERVICES UNDER NAT'L FAMILY CAREGIVER SUPPORT PROGRAM?: Checkbox
            AYRSUNFCSP: member['md_AYRSUNFCSP'],

            // CAREGIVER: Checkbox
            caregiver: member['md_caregiver'],

            // DO YOU REQUIRE ANY SPECIAL ASSISTANCE (Activies of Daily Living/Instrumental Activities of Daily Living)
            DYRASA: member['md_DYRASA'],

            // SERVICES REQUIRED: Checkbox
            servicesRequired: member['md_is_services_required'],

            // COMMENTS/NOTES:
            notes: member['md_notes'],

            // WILL THE MEMEBER BE USING MEALS-ON-WHEELS?
            WTMBUMOW: member['md_WTMBUMOW'],

            // HAVE THEY USED MOW BEFORE:
            HTUMB: member['md_HTUMB'],

            // START DATE: Int
            startDate: member['md_start_date'],

            // DELIVERY LENGTH: Checkbox
            deliveryLength: member['md_del_length'],

            // DELIVERY TYPE: Checkbox
            deliveryType: member['md_del_type'],

            // (M)DELIVERY DAYS: Checkbox
            deliveryDays: member['md_del_days'],

            // MICROWAVE: Checkbox
            microwave: member['md_microwave'],

            // ALLERGIES
            // ---------------------------------------------------------------------- //
            // ALLERGIES: Checkbox
            isAllergies: member['md_is_allergies'],

            // PLEASE SPECIFY: String
            pleaseSpecify: member['md_please_specify'],
            // ---------------------------------------------------------------------- //

            // MEAL TYPE: Checkbox
            mealType: member['md_meal_type'],

            // Milk TYPE: Checkbox
            milkType: member['md_milk_type'],

            // ADDITIONAL MEAL INSTRUCTIONS: String
            AMI: member['md_AMI'],

            // DRIVER INSTRUCTIONS: String
            driverInstr: member['md_driverInstr'],

            // ADDITIONAL COMMENTS: String
            additComm: member['md_additComm'],

            // PRIMARY DOCTOR OFFICE NAME: String
            PDON: member['md_PDON'],

            // PRIMARY DOCTOR NAME: String
            PDN: member['md_PDN'],

            // DOCTOR PHONE NUMBER: Int
            DPN: member['md_DPN'],

            // DOCTOR EMAIL: String
            DE: member['md_DE'],

            id: member['id'],

          });
        });
        return memberMap;
      });
  }

  // post member to the database
  saveMember(member: Member) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL, member, options);
  }

  // post member to the database
  updateMember(member: Member) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL_UPDATE, member, options);
  }

  // remove member from the database
  deleteMember(memberID: string) {
    return this.http.delete(API_URL,
      {
        params: {
          "id": memberID
        }
      });
  }
}
