var AWS = require('aws-sdk'), uuid = require('uuid'), 
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var params = {
        Item : {
        "Id" : uuid.v1(),
        "ai_class_name": event.className,
        "ai_time": event.time,
        "ai_days": event.days,
        "ai_city": event.city,
        "ai_state": event.state,
        "ai_zip": event.zip,
        "ai_phone": event.phone,
        "ai_email": event.email
        },
    TableName : 'activity_information' 

  };
    documentClient.put(params, function(err, data){
    callback(err, {
     "message":"activity information saved successfully."
    });
  });
};


// Test
/*
{
    "className": "TEST",
    "time": "1:00 pm",
    "days": "Friday",
    "city": "TEST",
    "state": "MT",
    "zip": "00000",
    "phone": "000-000-0000",
    "email": "TESTAOL.com"
}
*/