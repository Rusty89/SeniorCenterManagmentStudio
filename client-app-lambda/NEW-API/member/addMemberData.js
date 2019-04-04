var AWS = require('aws-sdk'), uuid = require('uuid'), 
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var params = {
        Item : {
        "Id" : uuid.v1(),

        // NAME: String
        "md_fname" : event.firstName,
        "md_lname": event.lastName,

        // PHONE #: Int or String
        "md_phone": event.phone,

        // EMAIL: String
        "md_email": event.email,

        // EMAIL: String
        "md_address": event.address,

        // ADDRESS: String
        "md_apt": event.apt,

        // CITY: String
        "md_city": event.city,

        // STATE: String
        "md_state": event.state,

        // ZIP: Int or String
        "md_zip_code": event.zip,

        // EMERGENCY CONTACT
        // -------------------------------------------------------------- //
        // EMERGENCY CONTACT NAME: String
        "md_emrg_name": event.emrgName,

        // EMERGENCY CONTACT RELATION: String
        "md_emrg_relation": event.emrgRelation,

        // EMERGENCY CONTACT PHONE #: Int or String
        "md_emrg_phone": event.emrgPhone,

        // EMERGENCY CONTACT EMAIL
        "md_emrg_email": event.emrgEmail,
        // -------------------------------------------------------------- //

        // DOB: String
        "md_dob": event.dob,
        
        // IS SPOUSE 60yo+?: Checkbox
        "md_is_spouse": event.isSpouse,

        // DISABLED STATUS: Checkbox
        "md_is_disabled": event.isDisabled,
        
        // ARE YOU DISABLED AND LIVING WITH SOMEONE 60+?
        "md_AYDALWS": event.AYDALWS,

        // VETERAN STATUS: Checkbox
        "md_is_veteran": event.isVeteran,

        // RACE: Checkbox
        "md_race": event.race,

        // ETHNICITY: Checkbox
        "md_ethnicity": event.ethnicity,

        // GENDER: Checkbox
        "md_gender": event.gender,

        // NUMBER IN HOUSEHOLD: Int or String
        "md_NIH": event.numInHousehold,

        // IS ONE PERSON A CAREGIVER?: Checkbox
        "md_IOPC": event.isOnePersonCaregiver,

        // MONTHLY HOUSEHOLD INCOME: Checkbox
        "md_monthly_household_income": event.monthlyHouseholdIncome,

        //ARE YOU RECEIVING SERVICES UNDER NAT'L FAMILY CAREGIVER SUPPORT PROGRAM?: Checkbox
        "md_AYRSUNFCSP": event.AYRSUNFCSP, 

        // CAREGIVER: Checkbox
        "md_caregiver": event.caregiver,

        // DO YOU REQUIRE ANY SPECIAL ASSISTANCE (Activies of Daily Living/Instrumental Activities of Daily Living)
        "md_DYRASA": event.DYRASA,
        
        // SERVICES REQUIRED: Checkbox
        "md_is_services_required": event.servicesRequired,

        // COMMENTS/NOTES:
        "md_notes": event.notes,

        // WILL THE MEMEBER BE USING MEALS-ON-WHEELS?
        "md_WTMBUMOW": event.WTMBUMOW,

        // HAVE THEY USED MOW BEFORE:
        "md_HTUMB": event.HTUMB,

        // START DATE: String
        "md_start_date": event.startDate,

        // DELIVERY LENGTH: Checkbox
        "md_del_length": event.deliveryLength,

        // DELIVERY TYPE: Checkbox
        "md_del_type": event.deliveryType,

        // (M)DELIVERY DAYS: Checkbox
        "md_del_days": event.deliveryDays,

        // MICROWAVE: Checkbox
        "md_microwave": event.microwave,

        // ALLERGIES
        // ---------------------------------------------------------------------- //
        // ALLERGIES: Checkbox
        "md_is_allergies": event.isAllergies,

        // PLEASE SPECIFY: String
        "md_please_specify": event.pleaseSpecify,
        // ---------------------------------------------------------------------- //

        // MEAL TYPE: Checkbox
        "md_meal_type": event.mealType,
        
        // Milk TYPE: Checkbox
        "md_milk_type": event.milkType,

        // ADDITIONAL MEAL INSTRUCTIONS: String
        "md_AMI": event.AMI,

        // DRIVER INSTRUCTIONS: String
        "md_driverInstr": event.driverInstr,

        // ADDITIONAL COMMENTS: String
        "md_additComm": event.additComm,

        // PRIMARY DOCTOR OFFICE NAME: String
        "md_PDON": event.PDON,

        // PRIMARY DOCTOR NAME: String
        "md_PDN": event.PDN,

        // DOCTOR PHONE NUMBER: Int or String
        "md_DPN": event.DPN,

        // DOCTOR EMAIL: String
        "md_DE": event.DE,
        },
    TableName : 'member_data' 

  };
    documentClient.put(params, function(err, data){
    callback(err, {
     "message":"member data saved successfully."
    });
  });
};


// Test
/*
{
        "firstName": "TEST",
        "lastName": "TEST",
        "phone": "TEST",
        "email": "TEST@AOL.com",
        "address": "TEST",
        "apt": "TEST",
        "city": "TEST",
        "state": "TEST",
        "zip": "TEST",
        "emrgName": "TEST",
        "emrgRelation": "TEST",
        "emrgPhone": "TEST",
        "emrgEmail": "emrgtest@AOL.com",
        "dob": "TEST",
        "isSpouse": "TEST",
        "isDisabled": "TEST",
        "AYDALWS": "TEST",
        "isVeteran": "TEST",
        "race": "TEST",
        "ethnicity": "TEST",
        "gender": "TEST",
        "numInHousehold": "TEST",
        "isOnePersonCaregiver": "TEST",
        "monthlyHouseholdIncome": "TEST",
        "AYRSUNFCSP": "TEST",
        "Caregiver": "TEST",
        "DYRASA": "TEST",
        "servicesRequired": "TEST",
        "notes": "TEST",
        "WTMBUMOW": "TEST",
        "HTUMB": "TEST",
        "startDate": "TEST",
        "deliveryLength": "TEST",
        "deliveryType": "TEST",
        "deliveryDays": "TEST",
        "microwave": "TEST",
        "isAllergies": "TEST",
        "pleaseSpecify": "TEST",
        "mealType": "TEST",
        "milkType": "TEST",
        "AMI": "TEST",
        "driverInstr": "TEST",
        "additComm": "TEST",
        "PDON": "TEST",
        "PDN": "TEST",
        "DPN": "TEST",
        "DE": "TEST"
}
*/