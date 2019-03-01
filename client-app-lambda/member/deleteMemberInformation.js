var AWS = require('aws-sdk'),
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    console.log("Received event: " + JSON.stringify(event));
    var params = {
        TableName: 'member_information',
        Key: {
            "mi_email": event['queryStringParameters']['email']
        }
    };

    documentClient.delete(params, function(err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            var response = {
                "statusCode": 200,
                "headers": {
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                "body": JSON.stringify({ 'msg': 'Member deleted successfully.' }),
                "isBase64Encoded": false
            };

            callback(null, response);
        }
    });
};


// TEST
/*
{
    "email": "example@AOL.com"
}
*/