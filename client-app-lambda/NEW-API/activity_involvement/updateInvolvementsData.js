var AWS = require('aws-sdk'),
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

    var tableName = "activity_involvement_data";
    //var update_attr = "set aid_activity_id = :activityID, aid_m_ids = :memberIDs";
    var update_attr = "set aid_m_ids = :memberIDs";

    var params = {
        TableName: tableName,
        Key: {
            "aid_activity_id": event.activityID
        },
        UpdateExpression: update_attr,
        ExpressionAttributeValues:
        {
            ":memberIDs": event.memberIDs
        }
    };

    documentClient.update(params, function (err, data) {
        callback(err, {
            "message": "activity involvement data updated successfully."
        });
    });
};

// TEST
/*
{
    "activityID": "f9924de0-5825-11e9-8197-13b0befb6c3b",
    "memberIDs": ["updated-1@AOL.com", "updated-2@AOL.com", "updated-3@AOL.com"]
}
*/