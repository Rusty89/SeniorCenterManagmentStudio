var AWS = require('aws-sdk'),
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
   
    var params = {
        TableName: 'member_authentication',
        Key: {
                'ma_username': event.username
        }
    };

    // Call DynamoDB to read the item from the table
    documentClient.get(params, function(err, data)
    {
        if (err) 
        {
            var response = {
                "statusCode": 400,
                "username": event.username,
            };

            callback(null, event.username);
        } 
        else 
        {
            if (event.username === data.Item['ma_username'])
            {
                callback(null, data.Item);
            }
            else
            {
                var response = {
                    "statusCode": 300,
                };
                callback(null, response);
            }
        }
    });
};