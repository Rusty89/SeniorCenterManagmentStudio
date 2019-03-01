var AWS = require('aws-sdk'), uuid = require('uuid'), 
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var params = {
        Item : {
        "Id" : uuid.v1(),
        "mi_f_name" : event.firstName,
        "mi_l_name": event.lastName,
        "mi_address": event.address,
        "mi_apt": event.apt,
        "mi_city": event.city,
        "mi_state": event.state,
        "mi_zip_code": event.zip,
        "mi_dob": event.month,
        "mi_phone": event.phone,
        "mi_email": event.email
        },
    TableName : 'member_information' 

  };
    documentClient.put(params, function(err, data){
    callback(err, {
     "message":"member information saved successfully."
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