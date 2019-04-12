var AWS = require('aws-sdk'), uuid = require('uuid'), 
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var params = {
        Item : {
        "id" : uuid.v1(),
        "aid_activity_id": event.activityID, // activity id
        "aid_m_ids": event.memberIDs // list of member IDs
        },
    TableName : 'activity_involvement_data' 

  };
    documentClient.put(params, function(err, data){
    callback(err, {
     "message":"activity involvement data information saved successfully."
    });
  });
};


// Test
/*
{
    "activityID": "f9924de0-5825-11e9-8197-13b0befb6c3b",
    "memberIDs": ["email-0@AOL.com", "email-1@AOL.com", "email-2@AOL.com"]
}
*/