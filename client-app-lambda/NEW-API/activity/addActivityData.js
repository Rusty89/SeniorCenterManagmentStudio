var AWS = require('aws-sdk'), uuid = require('uuid'), 
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var params = {
        Item : {
        "id" : uuid.v1(),
        "ad_class_name": event.className,
        "ad_time": event.time,
        "ad_days": event.days,
        "ad_location": event.location,
        "ad_phone": event.phone
        },
    TableName : 'activity_data' 

  };
    documentClient.put(params, function(err, data){
    callback(err, {
     "message":"activity data saved successfully."
    });
  });
};


// Test
/*
{
    "className": "NEW",
    "time": "1:00 pm",
    "days": "Friday",
    "location": "NEW",
    "phone": "000-000-0000"
}
*/