var AWS = require('aws-sdk'), uuid = require('uuid'), 
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var params = {
        Item : {
        "Id" : uuid.v1(),
        "vi_f_name" : event.firstName,
        "vi_l_name": event.lastName,
        "vi_address": event.address,
        "vi_apt": event.apt,
        "vi_city": event.city,
        "vi_state": event.state,
        "vi_zip_code": event.zip,
        "vi_dob": event.month,
        "vi_phone": event.phone,
        "vi_email": event.email
        },
    TableName : 'volunteer_information' 

  };
    documentClient.put(params, function(err, data){
    callback(err, {
     "message":"volunteer information saved successfully."
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