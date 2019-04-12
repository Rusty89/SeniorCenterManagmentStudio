var AWS = require('aws-sdk'), uuid = require('uuid'), 
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var params = {
        Item : {
        "id" : uuid.v1(),
        "vd_f_name" : event.firstName,
        "vd_l_name": event.lastName,
        "vd_address": event.address,
        "vd_apt": event.apt,
        "vd_city": event.city,
        "vd_state": event.state,
        "vd_zip_code": event.zip,
        "vd_dob": event.dob,
        "vd_phone": event.phone,
        "vd_email": event.email
        },
    TableName : 'volunteer_data' 

  };
    documentClient.put(params, function(err, data){
    callback(err, {
     "message":"volunteer data saved successfully."
    });
  });
};


// Test
/*
{
    "firstName" : "John",
    "lastName": "Smith",
    "address": "123 Main St.",
    "apt": "Suite #05",
    "city": "Belgrade",
    "state": "MT",
    "zip": "59714",
    "month": "02/22/2019",
    "phone": "406-777-0123",
    "email": "example@AOL.com"
}
*/