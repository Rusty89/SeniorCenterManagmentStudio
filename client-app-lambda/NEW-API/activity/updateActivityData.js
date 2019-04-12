var AWS = require('aws-sdk'),
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

    var tableName = "activity_data";
    var update_attr = `
        set ad_class_name = :className, 
        ad_time = :time, 
        ad_days = :days, 
        ad_location = :location`;

    var params = {
        TableName: tableName,
        Key: {
            "id": event.id
        },
        UpdateExpression: update_attr,
        ExpressionAttributeValues:
        {
            ":className": event.className,
            ":time": event.time,
            ":days": event.days,
            ":location": event.location
        }
    };

    documentClient.update(params, function (err, data) {
        callback(err, {
            "message": "activity data updated successfully."
        });
    });
};


// Test
/*
{
    "className": "UPDATE-4",
    "time": "UPDATE-4",
    "days": "UPDATE-4",
    "location": "UPDATE-4",
    "phone": "UPDATE-4",
    "id": "9fb51780-5afa-11e9-ae47-b96f02066930"
}
*/




// EXAMPLE 1
// --------------------------------------------------------------------- //
/*
var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "Movies";

var year = 2015;
var title = "The Big New Movie";

// Update the item, unconditionally,

var params = {
    TableName:table,
    Key:{
        "year": year,
        "title": title
    },
    UpdateExpression: "set info.rating = :r, info.plot=:p, info.actors=:a",
    ExpressionAttributeValues:{
        ":r":5.5,
        ":p":"Everything happens all at once.",
        ":a":["Larry", "Moe", "Curly"]
    },
    ReturnValues:"UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});
*/

// EXAMPLE 2
// --------------------------------------------------------------------- //
/*
var updateConditionally = function(email,fullName,prefix,callback)
{
    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = {
        TableName:"Users",
        Key: {
            email : email
        },
        UpdateExpression: "set fullname = :fullname",
        ConditionExpression: "begins_with(fullname,:prefix)",
        ExpressionAttributeValues:{
            ":fullname":fullName,
            ":prefix":prefix
        },
        ReturnValues:"UPDATED_NEW"
    };


    docClient.update(params,callback);

}
*/
// --------------------------------------------------------------------- //