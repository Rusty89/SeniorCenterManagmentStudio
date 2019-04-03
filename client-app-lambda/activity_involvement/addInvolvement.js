var AWS = require('aws-sdk'), uuid = require('uuid'), 
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var params = {
        Item : {
        "Id" : uuid.v1(),
        "ain_uname": event.uniqueName,
        "ain_m_emails": event.memberEmails
        },
    TableName : 'activity_involvement' 

  };
    documentClient.put(params, function(err, data){
    callback(err, {
     "message":"activity involvement information saved successfully."
    });
  });
};


// Test
/*
{
    "uniqueName": "TEST",
    "memberEmails": ["email-0@AOL.com", "email-1@AOL.com", "email-2@AOL.com"]
}
*/