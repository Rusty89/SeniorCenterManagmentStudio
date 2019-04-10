var AWS = require('aws-sdk'),
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

    var tableName = "volunteer_data";
    var update_attr = `
        set vd_f_name = :firstName, 
        vd_l_name = :lastName, 
        vd_address = :address, 
        vd_apt = :apt,
        vd_city = :city,
        vd_state = :state,
        vd_zip_code = :zip,
        vd_dob = :dob,
        vd_phone = :phone,
        vd_email = :email`;

    var params = {
        TableName: tableName,
        Key: {
            "id": event.id
        },
        UpdateExpression: update_attr,
        ExpressionAttributeValues:
        {
            ":firstName" : event.firstName,
            ":lastName": event.lastName,
            ":address": event.address,
            ":apt": event.apt,
            ":city": event.city,
            ":state": event.state,
            ":zip": event.zip,
            ":dob": event.dob,
            ":phone": event.phone,
            ":email": event.email
        }
    };

    documentClient.update(params, function (err, data) {
        callback(err, {
            "message": "volunteer data updated successfully."
        });
    });
};

// TEST
/*
{
    "id": "032cef20-5882-11e9-b33d-0992668dd5b9",
    "firstName" : "UPDATED",
    "lastName": "UPDATED",
    "address": "UPDATED",
    "apt": "UPDATED",
    "city": "UPDATED",
    "state": "UPDATED",
    "zip": "UPDATED",
    "dob": "05/05/2019",
    "phone": "UPDATED",
    "email": "UPDATED"
}
*/